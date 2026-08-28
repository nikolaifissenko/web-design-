#!/usr/bin/env python3
"""
Pipeline status tracker: reads every clients/<slug>/_lead.md and reports
what needs to happen next, ranked by leverage. Zero API calls, just parses
the same Status/Response/Sold lines the workflow already keeps up to date
(see scripts/README.md "Tracking outreach and responses").

Usage: python3 scripts/pipeline_status.py
"""
import re
from datetime import date, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CLIENTS = ROOT / "clients"
FOLLOWUP_DAYS = 3  # first bump due this many days after send with no reply

DATE_RE = re.compile(r"sent (\d{4}-\d{2}-\d{2})")
FIELD_RE = re.compile(r"^-\s+\*\*(\w[\w /]*):\*\*\s*(.*)$")


def parse_lead(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    fields = {}
    for line in text.splitlines():
        m = FIELD_RE.match(line.strip())
        if m:
            key = m.group(1).strip().lower()
            fields.setdefault(key, m.group(2).strip())
    return fields


def classify(slug: str, fields: dict) -> dict:
    status = fields.get("status", "").lower()
    response = fields.get("response", "").lower()
    sold = fields.get("sold", "no").lower()
    email = fields.get("email", "")

    result = {"slug": slug, "status_raw": fields.get("status", ""), "email": email}

    if sold.startswith("yes"):
        result["bucket"] = "SOLD"
        return result

    if "bounced" in status:
        result["bucket"] = "DEAD_CHANNEL"
        return result

    if status.startswith("not built"):
        result["bucket"] = "BLOCKED_NOT_BUILT"
        return result

    if "demo-built" in status and not DATE_RE.search(status):
        result["bucket"] = "DEMO_READY_NOT_SENT"
        result["verify_first"] = "phone verification" in status or "verify by phone" in status
        return result

    if "not yet contacted" in status or "not sent yet" in status or "not sent yet" in response:
        result["bucket"] = "NEEDS_INITIAL_SEND"
        has_real_email = bool(email) and "none found" not in email.lower() and "no email" not in email.lower()
        result["needs_human"] = "needs nikolai" in status or "claude cannot" in status or not has_real_email
        return result

    m = DATE_RE.search(status)
    if m:
        sent = datetime.strptime(m.group(1), "%Y-%m-%d").date()
        days = (date.today() - sent).days
        result["sent_date"] = sent
        result["days_since"] = days
        if "interested" in response or "reply" in response and "no reply" not in response:
            result["bucket"] = "REPLIED"
        elif days >= FOLLOWUP_DAYS:
            result["bucket"] = "NEEDS_FOLLOWUP"
        else:
            result["bucket"] = "WAITING"
        return result

    result["bucket"] = "UNKNOWN"
    return result


def main():
    leads = []
    for lead_file in sorted(CLIENTS.glob("*/_lead.md")):
        slug = lead_file.parent.name
        fields = parse_lead(lead_file)
        leads.append(classify(slug, fields))

    buckets = {}
    for l in leads:
        buckets.setdefault(l["bucket"], []).append(l)

    print(f"Pipeline status as of {date.today().isoformat()} ({len(leads)} demos)\n")

    order = [
        ("DEMO_READY_NOT_SENT", "DEMO BUILT, PITCH NOT SENT (ready, just needs the email/DM sent)"),
        ("NEEDS_INITIAL_SEND", "NEVER CONTACTED (ready to send, zero building needed)"),
        ("NEEDS_FOLLOWUP", f"FOLLOW-UP DUE (>={FOLLOWUP_DAYS} days, no reply)"),
        ("DEAD_CHANNEL", "DEAD CHANNEL (bounced, needs alt contact)"),
        ("WAITING", "WAITING (recently sent, not due yet)"),
        ("REPLIED", "REPLIED (needs a human decision/response)"),
        ("BLOCKED_NOT_BUILT", "BLOCKED (not built yet, needs a decision first)"),
        ("SOLD", "SOLD"),
        ("UNKNOWN", "UNPARSED (check _lead.md by hand)"),
    ]

    for key, title in order:
        items = buckets.get(key, [])
        if not items:
            continue
        print(f"## {title} ({len(items)})")
        for l in items:
            if key == "NEEDS_INITIAL_SEND":
                who = "Nikolai (DM/phone only)" if l.get("needs_human") else "email available"
                print(f"  - {l['slug']}  [{who}]")
            elif key in ("NEEDS_FOLLOWUP", "WAITING"):
                print(f"  - {l['slug']}  (sent {l['sent_date']}, {l['days_since']}d ago)")
            elif key == "DEAD_CHANNEL":
                print(f"  - {l['slug']}  ({l['status_raw'][:80]})")
            elif key == "DEMO_READY_NOT_SENT":
                flag = "  [VERIFY BY PHONE FIRST]" if l.get("verify_first") else ""
                print(f"  - {l['slug']}{flag}")
            else:
                print(f"  - {l['slug']}")
        print()

    total_unsold = sum(len(v) for k, v in buckets.items() if k != "SOLD")
    print(f"Sold: {len(buckets.get('SOLD', []))} / target 4. Open pipeline: {total_unsold}.")


if __name__ == "__main__":
    main()
