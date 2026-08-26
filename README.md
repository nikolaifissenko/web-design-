# Lead-Gen Rome

Find small Rome businesses with bad or missing websites, build them a free
demo, sell it for €500 + optional monthly hosting/social retainer.

## Status (2026-08-26)

**GitHub Pages is live on this repo** (Settings → Pages → Deploy from
branch `main` / root) — every push to `main` auto-deploys. Each client's
demo URL is `https://nikolaifissenko.github.io/web-design-/clients/<slug>/`.

9 client demos built and live, none sold yet:

| Client | Sector | Neighborhood | Contact channel | Outreach sent? |
|---|---|---|---|---|
| `barbagianni` | bar | Pigneto | Instagram DM / phone | no |
| `monego-pigneto` | bar | Pigneto | Instagram DM / phone | no |
| `tinto-lavanderia` | lavanderia | — | email | no |
| `autofficina-pisino` | autofficina | Collatino | email | no |
| `tanto-pe-magna` | trattoria | Garbatella | Facebook Messenger / phone | no |
| `da-carlone` | trattoria | Trastevere | Instagram DM / phone | no |
| `testaccio-xix-xxv` | B&B | Testaccio | email (site was 503, own domain) | no |
| `a-testaccio-da-max` | B&B | Testaccio | WhatsApp/phone (no site at all) | no |
| `la-casa-sugli-alberi` | B&B | Testaccio | phone only (no email/site found) | no |

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
site at all) — see table above. The other 3 confirmed-bad B&B leads
(Trastevereinbed, Roma Trasteverina, Una Finestra su Monti) still need
demos built.

**Sector prioritization for further outreach** (see full reasoning in
session notes): B&Bs and family trattorie are Tier 1 (clear ROI pitch —
OTA commissions for B&Bs, authentic personal-story angle for trattorie);
artisan shops (sartorie, calzolai, orologiai) are Tier 1 for low
competition/high authenticity but lower volume; parrucchieri/barbieri,
autofficine, lavanderie are Tier 2; bars/chains are lowest priority.

**Next up:** build demos for the remaining 3 confirmed-bad B&B leads, then
either expand the B&B batch to more neighborhoods or move to the artisan
sector (was mid-search on "Bottega dell'Artigianaio", a Monti watchmaker,
when a previous session ended — pick up there or start fresh).

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
4. Edit `clients/<business-slug>/js/config.js`, drop in real photos.
5. Deploy (`scripts/deploy.md` — Cloudflare Pages or Vercel, both free,
   both instant since there's no build step).
6. Send the demo link (`scripts/pitch_template.md`).
7. Track status in `clients/<business-slug>/_lead.md`.

## Why no framework

The whole point is speed from "found a lead" to "demo is live." Plain
HTML/CSS/JS with one config file means: no `npm install`, no build step, no
dependency rot six months from now, and any static host (Vercel,
Cloudflare Pages, GitHub Pages) deploys it by just uploading the folder.
