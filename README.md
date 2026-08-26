# Lead-Gen Rome

Find small Rome businesses with bad or missing websites, build them a free
demo, sell it for €500 + optional monthly hosting/social retainer.

## Status (2026-08-26)

**GitHub Pages is live on this repo** (Settings → Pages → Deploy from
branch `main` / root) — every push to `main` auto-deploys. Each client's
demo URL is `https://nikolaifissenko.github.io/web-design-/clients/<slug>/`.

12 client demos built and live, none sold yet:

| Client | Sector | Neighborhood | Contact channel | Outreach sent? |
|---|---|---|---|---|
| `barbagianni` | bar | Pigneto | Instagram DM / phone | no |
| `monego-pigneto` | bar | Pigneto | Instagram DM / phone | no |
| `tinto-lavanderia` | lavanderia | — | email | **yes** (2026-08-26) |
| `autofficina-pisino` | autofficina | Collatino | email | **yes** (2026-08-26) |
| `tanto-pe-magna` | trattoria | Garbatella | Facebook Messenger / phone | no |
| `da-carlone` | trattoria | Trastevere | Instagram DM / phone | no |
| `testaccio-xix-xxv` | B&B | Testaccio | email (site was 503, own domain) | **yes** (2026-08-26) |
| `a-testaccio-da-max` | B&B | Testaccio | WhatsApp/phone (no site at all) | no |
| `la-casa-sugli-alberi` | B&B | Testaccio | phone only (no email/site found) | no |
| `trastevereinbed` | B&B | Trastevere | email (verified) | **yes** (2026-08-26) |
| `roma-trasteverina` | B&B | Trastevere | email (found 2026-08-26) | **yes** (2026-08-26) |
| `una-finestra-su-monti` | B&B | Monti | email (verified) | **yes** (2026-08-26) |

Every client's `_lead.md` has ready-to-send outreach drafts (personal-story
angle: Nikolai as a new web designer practicing, not a sales pitch) in
both DM/phone and email form. Barbagianni, Monego Pigneto, and Tanto pè
Magnà have their real Instagram logo/branding applied instead of an
invented palette (crop it from a screenshot Nikolai sends — Instagram
and Facebook block automated fetching, confirmed repeatedly).

**New this round: B&B sector.** Seeded `scripts/leads.csv` with 8 Rome B&Bs
(sourced from bed-and-breakfast.it, Tripadvisor, PagineBianche, Expedia —
manual search, no Google Places API key set up). Eyeballed the ones with an
existing site: 4 confirmed bad/broken (Trastevereinbed — dated, no mobile
support; Roma Trasteverina — ASP.NET WebForms, contact page 500s; Una
Finestra su Monti — dead Google+ buttons, leftover placeholder text;
Testaccio XIX-XXV — own domain returns HTTP 503, site is effectively down),
1 dropped as a false positive (El Dorado Prati turned out genuinely modern),
1 inconclusive (Etere in Prati blocks automated fetching, needs a real
browser check). Built demos for the 3 strongest of these (site down, or no
site at all) — see table above.

**Round 2:** built the remaining 3 confirmed-bad B&B demos (Trastevereinbed,
Roma Trasteverina, Una Finestra su Monti), this time checking each one's
existing site for real branding to reuse instead of generic stock:
- **Roma Trasteverina** and **Una Finestra su Monti** — pulled real interior
  photos and real brand colors directly from their own (outdated) sites.
  Roma Trasteverina's photos needed cropping to remove baked-in caption
  text ("Comfort & Relax at Rome") from the originals.
- **Trastevereinbed** — no reusable assets exist: their only other image
  asset 404s (removed from the server), and their "logo" is actually the
  entire nav graphic with unfinished placeholder text baked into the
  pixels ("Copyright information Goes Here") — not a real mark. Fell back
  to the shared stock set for this one, and used their real background
  color instead.
- None of the three had a logo shaped for the template's circular 40×40
  logo slot (all wide wordmarks) — skipped `logoImage` on all three rather
  than force an unreadable crop; real colors carry the brand instead.
- Two of the three (Trastevereinbed, Una Finestra su Monti) have their own
  leftover placeholder text still live on their site — a very concrete,
  quotable opening line for outreach, used in both `_lead.md` drafts.

**Sector prioritization for further outreach** (see full reasoning in
session notes): B&Bs and family trattorie are Tier 1 (clear ROI pitch —
OTA commissions for B&Bs, authentic personal-story angle for trattorie);
artisan shops (sartorie, calzolai, orologiai) are Tier 1 for low
competition/high authenticity but lower volume; parrucchieri/barbieri,
autofficine, lavanderie are Tier 2; bars/chains are lowest priority.

**Branding extraction is now a standard, mandatory workflow step** (see
`scripts/branding-extraction.md`), not just something done for B&Bs.
Retroactively applied it to `tinto-lavanderia` and `autofficina-pisino`
(the two non-B&B clients with a live-but-dated site that had never been
checked): Tinto Lavanderia's real logo (a droplets icon, actually
square-shaped — unlike every B&B wordmark so far) is now used as
`logoImage`, and both got their real CSS brand colors swapped in in place
of invented ones. Neither had real photos to reuse — both businesses'
own sites turned out to be using generic stock too, same as ours, so the
Unsplash sets are unchanged there. `barbagianni`, `monego-pigneto`, and
`tanto-pe-magna` were already compliant (real Instagram branding, done in
an earlier session); `da-carlone` has a dead domain with nothing to
extract, also already correctly stock-only.

**First outreach sent 2026-08-26.** Emailed the 5 clients with a verified
address: Tinto Lavanderia, Autofficina Pisino, Testaccio XIX-XXV,
Trastevereinbed, Una Finestra su Monti. Each `_lead.md` has the Gmail
message ID sent. Nothing sent yet for the DM/phone-only leads
(Barbagianni, Monego Pigneto, Tanto pè Magnà, Da Carlone, A Testaccio da
Max, La Casa sugli Alberi, Roma Trasteverina) — those need a human to
actually send the Instagram DM/call, or a found email/phone confirmed
first for Roma Trasteverina.

**Next up:** watch for replies to the 5 emails sent, either expand the
B&B batch to more neighborhoods or move to the artisan sector (was
mid-search on "Bottega dell'Artigianaio", a Monti watchmaker, when a
previous session ended — pick up there or start fresh). Applying the
branding-extraction step is now automatic for every
new client going forward, not a separate task to remember.

**Lead-finding approach that actually worked**, vs. what's below: manual
web search (business type + neighborhood), then verify no website /
website is bad by fetching it, then check for a public email or
Instagram/Facebook handle before building. A dead domain (was once
listed, no longer resolves) counts as a strong lead — check with
`curl`/DNS, it's arguably a worse look than never having had a site.
`find_leads.py` (Google Places API) was never actually used this way —
requires an API key that was never set up.

## Structure

- **`template/`** — the reusable site: single page, mobile-first, sections
  for hero, about, menu/services, gallery, contact, hours, map, socials.
  Plain HTML/CSS/JS, zero build step. Nearly all customization happens in
  one file: `template/js/config.js`.
- **`clients/`** — one folder per business, each a clone of `template/`.
- **`scripts/`** — lead-finding (`find_leads.py`) and deploy helpers
  (`new_client.sh`, `deploy.md`, `pitch_template.md`).

## Workflow

1. `python scripts/find_leads.py "<business type>" --area "<neighborhood>, Roma"`
   → appends candidates to `scripts/leads.csv`.
2. Pick a lead with a missing/bad website, eyeball it.
3. `./scripts/new_client.sh <business-slug>` → scaffolds `clients/<business-slug>/`.
4. **Branding pass (mandatory) — see `scripts/branding-extraction.md`.**
   Before touching stock photos, check the lead's existing site/socials for
   a real logo, real brand colors, and real photos worth reusing. Only fall
   back to generic Unsplash stock for whatever isn't found real. Document
   what's real vs. stock in both `config.js` (comment) and `_lead.md`.
5. Edit `clients/<business-slug>/js/config.js` with the real info + assets
   from step 4.
6. Deploy (`scripts/deploy.md` — Cloudflare Pages or Vercel, both free,
   both instant since there's no build step).
7. Send the demo link (`scripts/pitch_template.md`).
8. Track status in `clients/<business-slug>/_lead.md`.

## Why no framework

The whole point is speed from "found a lead" to "demo is live." Plain
HTML/CSS/JS with one config file means: no `npm install`, no build step, no
dependency rot six months from now, and any static host (Vercel,
Cloudflare Pages, GitHub Pages) deploys it by just uploading the folder.
