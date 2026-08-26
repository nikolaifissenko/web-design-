# Scripts

| Script | Purpose |
|--------|---------|
| `find_leads.py` | Search Google Places for local businesses missing a website (or worth checking). Appends to `leads.csv`. Requires a free Google Places API key — see `.env.example`. |
| `new_client.sh` | Clone `../template/` into `../clients/<slug>/` with a `_lead.md` tracker. |
| `deploy.md` | How to push a client folder live on Cloudflare Pages or Vercel (no build step, drag-and-drop or one CLI command). |
| `pitch_template.md` | Outreach message to send once a demo is live. |
| `branding-extraction.md` | **Mandatory step 4 below.** How to check a lead's existing site/socials for a real logo, real brand colors, and real photos before falling back to stock. |

## Typical workflow

```
# 1. Find leads
pip install -r requirements.txt
cp .env.example .env   # add your Google Places API key
python find_leads.py "trattoria" --area "Trastevere, Roma"

# 2. Review leads.csv, pick one worth a demo

# 3. Scaffold their site
./new_client.sh trattoria-da-marco

# 4. Branding pass FIRST (see branding-extraction.md) — check their
#    existing site/socials for a real logo, real colors, real photos.
#    Only fall back to stock for whatever isn't found real.

# 5. Customize clients/trattoria-da-marco/js/config.js + images/

# 6. Deploy (see deploy.md) and send the pitch (see pitch_template.md)
```

`leads.csv` and `.env` are gitignored (leads are a working list, not code;
the API key is a secret) — see the repo's `.gitignore`.

## Tracking outreach and responses

Once a demo is live and outreach is sent, track it in **two places**, kept
in sync:

- **`clients/<slug>/_lead.md`** — the source of truth per business. Update
  `Status:` when outreach goes out (`outreach-sent (email sent <date> to
  <address> — Gmail message ID <id>)`, or the DM/call equivalent), and keep
  a `Response:` line under it (`n/a — outreach not sent yet`, `no reply yet
  (checked <date>)`, or the actual outcome once one comes in — interested /
  not interested / sold, with a one-line summary of what they said).
- **`leads.csv`** — the `outreach_sent` and `response` columns mirror the
  same two facts at a glance across the whole batch, for leads sourced via
  `find_leads.py`. Update both when you update a `_lead.md`; don't let them
  drift apart.

Check for replies before re-contacting a lead (`get_thread`/`search_threads`
for email, actually checking the DM/call yourself for the rest) — don't
just assume silence. When a reply comes in, update both files immediately,
regardless of whether the answer is "not interested."
