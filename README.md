# Lead-Gen Rome

Find small Rome businesses with bad or missing websites, build them a free
demo, sell it for €500 + optional monthly hosting/social retainer.

## Status (2026-08-26)

**GitHub Pages is live on this repo** (Settings → Pages → Deploy from
branch `main` / root) — every push to `main` auto-deploys. Each client's
demo URL is `https://nikolaifissenko.github.io/web-design-/clients/<slug>/`.

14 client demos built and live, none sold yet (1 more — Testaccio XIX-XXV —
declined and demo removed, see below):

| Client | Sector | Neighborhood | Contact channel | Outreach sent? |
|---|---|---|---|---|
| `barbagianni` | bar | Pigneto | Instagram DM / phone | no |
| `monego-pigneto` | bar | Pigneto | Instagram DM / phone | no |
| `tinto-lavanderia` | lavanderia | — | email | **yes** (2026-08-26) |
| `autofficina-pisino` | autofficina | Collatino | email | **yes** (2026-08-26) |
| `tanto-pe-magna` | trattoria | Garbatella | Facebook Messenger / phone | no |
| `da-carlone` | trattoria | Trastevere | Instagram DM / phone | no |
| `a-testaccio-da-max` | B&B | Testaccio | WhatsApp/phone (no site at all) | no |
| `la-casa-sugli-alberi` | B&B | Testaccio | phone only (no email/site found) | no |
| `trastevereinbed` | B&B | Trastevere | email (verified) | **yes** (2026-08-26) |
| `roma-trasteverina` | B&B | Trastevere | email (found 2026-08-26) | **yes** (2026-08-26) |
| `una-finestra-su-monti` | B&B | Monti | email (verified) | **yes** (2026-08-26) |
| `sartoria-carbone` | sartoria (artisan) | Prati | email (verified) | no |
| `artigianaio-orologi` | orologiaio (artisan) | Rione Monti | phone only (no email/site/social found) | no |
| `antica-legatoria-del-vico` | legatoria (artisan) | Centro storico (Navona) | email (verified) | no |

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

**Round 3 (2026-08-26, later same day) — real-photo push + DM screenshots.**
Two follow-up emails sent this round too: Roma Trasteverina
(info@romatrasteverina.com, found directly in their own homepage HTML) —
**6 emails sent total now**, one per client with a verified address.
Then, per explicit feedback ("stop using stock, use real images" / "act
like a professional web designer"):

- **Redesigned Autofficina Pisino's logo from scratch** instead of leaving
  it as text initials — their real logo has icon and text touching with
  no clean square crop anywhere (checked pixel-by-pixel), so a first pass
  had skipped `logoImage` entirely. Wrong call: drew a clean flat-style
  car-silhouette icon using their real brand colors (black + mustard-yellow
  `#dcd221`), sized for the template's circular slot. Live now as
  `clients/autofficina-pisino/images/logo.png`. **This is now the
  documented standard** (`CLAUDE.md`, `scripts/branding-extraction.md`):
  adapt a real asset that doesn't fit rather than falling back to
  initials/stock as a first resort.
- **Found real photos for Tanto pè Magnà** (real exterior, real customer
  dish photos, a table shot with their own branded placemat) from
  piatti.menu's public listing — zero stock left on that client.
- **Found real photos for Barbagianni** (real shop entrance + a real
  portrait of the owner, Ali Can) from a dedicated RomaToday feature —
  `hero`/`about` now real, gallery still stock.
- **Found real photos for Testaccio XIX-XXV** (room, breakfast, reception,
  desk corner) — turns out they have **two domains**: `testaccio19-25.com`
  (dead, 503 — what the outreach email referenced) and `testaccio19-25.it`
  (alive, modern, real photos). All photos on this client are now real,
  pulled from the `.it` site. **Flagged in `_lead.md`**: if they reply
  pointing at the working `.it` site, that's expected, not a mistake — the
  `.com` genuinely is down.
- **Checked but blocked, still stock (documented why, so it's not
  re-attempted blindly next time):** Monego Pigneto (Treatwell is a
  client-rendered SPA, no static photos — same dead end as Instagram);
  A Testaccio da Max and La Casa sugli Alberi (both have real Tripadvisor
  photos, but Tripadvisor returns HTTP 403 to both `curl` and `WebFetch`
  on every page tried — harder block than anything else this session hit).
  Trastevereinbed stays stock too, confirmed in an earlier round (their
  only other image asset genuinely 404s).
- **New response-tracking system**: every `_lead.md` now has a `Response:`
  line next to `Status:` (checked against Gmail directly, not assumed —
  all 6 sent threads had zero replies as of this round), and `leads.csv`
  got matching `outreach_sent`/`response` columns. Convention documented
  in `scripts/README.md`.
- **New: real screenshots for DM outreach.** For the 4 businesses contacted
  by DM (no email exists), a bare link doesn't preview in Instagram DMs —
  screenshotted each live demo with Playwright instead (against the local
  `index.html` via `file://`, not the live URL — hitting the live GitHub
  Pages URL directly ran into proxy/connection issues in this sandbox; see
  `scripts/branding-extraction.md` for the exact setup that worked). Saved
  to `clients/<slug>/screenshots/demo-preview.png` for Barbagianni, Monego
  Pigneto, Da Carlone, Tanto pè Magnà. Each `_lead.md` draft now says to
  attach the screenshot and includes the line "nell'immagine ho fatto una
  demo di come potrebbe venire il sito" before the link.

**Testaccio XIX-XXV declined (2026-08-26), demo removed.** "Grazie
Nikolai, al momento stiamo bene così... In bocca al lupo!" — polite, not
interested, door left open. Sent a brief thank-you reply and deleted
`clients/testaccio-xix-xxv/` — no point leaving a live demo for a
declined lead. The other 5 outreach threads (Autofficina Pisino, Tinto
Lavanderia, Trastevereinbed, Una Finestra su Monti, Roma Trasteverina)
were still silent as of the last check.

**Round 4 (2026-08-26) — moved into the artisan sector, 2 new demos,
both fully real or honestly-substituted branding, zero shortcuts:**

- **`sartoria-carbone`** (Sartoria Carbone, Via Leone IV, Prati) — a
  bespoke menswear tailor since 1957. Found via web search for artisan
  sartorie. **Rare case: everything on the demo is real, nothing stock.**
  They have two live sites — an ancient `.it` domain (mootools,
  `swfobject`, `html5shiv` loaded from the long-dead googlecode.com, no
  viewport tag: confirmed not mobile-responsive) and a newer, generic
  free Wix site. The Wix site's own media CDN turned out to hold a full
  set of real, professionally shot photos of the actual tailors and shop
  — Giuseppe Carbone fitting a client, a black-and-white photo of both
  the founder (Cavalier Domenicoantonio) and his son Giuseppe together,
  a macro shot of a jacket's hand-basting, a runway photo of a
  Carbone-tailored coat — all pulled down and used directly. Logo is
  their real "Carbone — Dal 1957" script mark, already square, just
  center-cropped (no redesign needed, unlike Autofficina Pisino). Colors
  (black/white + a warm gold accent) drawn from that same real logo and
  photography, not invented.
- **`artigianaio-orologi`** (L'Artigianaio Orologi di Daniele Merelli,
  Via Urbana, Rione Monti) — a watch-repair artisan active since 1999,
  found via web search for Monti's historic watchmakers (the lead the
  previous session was mid-searching when it ended). **The strongest
  kind of lead: zero digital presence at all** — no domain, no
  Facebook/Instagram found anywhere, confirmed across 6+ directory
  listings. No real photos were recoverable either: the one third-party
  directory with photos attached to their listing (nicelocal.it, via
  zoon.ru) turned out to be a mixed-up listing — downloaded and checked,
  the "photos" were Red Square in Moscow and an unrelated dental office,
  not this business. Used well-chosen, specifically-relevant Unsplash
  stock instead (a real watchmaker at work with a loupe, genuine macro
  shots of mechanical watch movements, a museum photo of antique pocket
  watches) rather than generic filler. **No existing logo to adapt at
  all**, so — per Nikolai's standing instruction to design one rather
  than fall back to initials when there's nothing real to work from —
  drew a new one from scratch: a navy-and-antique-gold pocket-watch face
  icon (PIL `ImageDraw`), deliberately circular so it fills the
  template's logo slot with zero cropping compromise.
- Both `_lead.md`s document exactly what's real vs. substituted, same
  convention as every prior client. Neither outreach email/DM sent yet —
  Sartoria Carbone has a verified email, Artigianaio Orologi has phone
  only. Both nav bars localized to Italian (Chi siamo/Galleria/Orari/
  Contatti) — the shared template ships these 4 words hardcoded in
  English in `index.html` (not driven by `config.js`), true of every
  existing client too; fixed on just these two rather than scope-creeping
  into the other 11.

**Round 5 (2026-08-26, same day) — 1 more artisan demo, and outreach-sending
is now blocked in this environment:**

- **`antica-legatoria-del-vico`** (Antica Legatoria Del Vico, Vicolo del
  Governo Vecchio, a Piazza Navona) — a bookbinding/restoration artisan.
  Found via web search for Rome's historic legatorie, alongside two other
  candidates (Procopio Calzature, Legatoria Rumori) that turned out to
  already have modern, well-designed sites — false positives, skipped,
  same as El Dorado Prati before them. Del Vico's real site is live but
  built on **WordPress 5.7.1** (a 2021 release, now stale) with a photo
  gallery that's literally unedited WhatsApp exports (filenames like
  `WhatsApp-Image-2021-03-02-at-17.14.33.jpeg`, never renamed or curated)
  — real, good material, zero design work applied to it. **All photos on
  the demo are real**, pulled from that gallery: a red leather-bound
  liturgical volume, an antique gilding tool resting on two finished
  bindings, a book mid-restoration with hand-sewn ribbon bookmarks, a
  drawer of gilding stamps/type. **Logo:** their real stamp/badge (an
  arched oval with the shop name, address, and phone all baked into one
  image) doesn't fit a circular slot any better than Trastevereinbed's
  did, so — instead of falling back to initials — redrew an open-book
  icon using colors sampled pixel-for-pixel from their real stamp
  (`#b0a14e` gold, `#fff090` cream, `#2b2418` near-black), not an
  invented palette. Verified email, no socials found.
- **Attempted to send Sartoria Carbone's outreach email this round —
  blocked.** The auto-mode permission classifier in this environment
  denies `Gmail__send_message` for a new cold-outreach email (as opposed
  to `reply`, used earlier for the Testaccio thank-you, which went
  through fine). Sending new emails to businesses appears to need
  explicit human approval in this session; did not attempt to work
  around it. All three new artisan clients (Sartoria Carbone,
  Artigianaio Orologi, Antica Legatoria Del Vico) have ready-to-send
  drafts in their `_lead.md` but nothing has actually gone out.
- Re-checked the 5 silent outreach threads (Autofficina Pisino, Tinto
  Lavanderia, Trastevereinbed, Una Finestra su Monti, Roma Trasteverina)
  — still no replies as of this round.

**Next up:**
1. **Nikolai to actually send the 4 DM messages** (Barbagianni, Monego
   Pigneto, Da Carlone, Tanto pè Magnà) — Claude can't send Instagram DMs.
   Screenshots + exact text are ready in each `_lead.md`.
2. **Nikolai to call** La Casa sugli Alberi (landline only), A Testaccio
   da Max (WhatsApp), and **Artigianaio Orologi** (phone only, no other
   channel exists) — drafts ready in each `_lead.md`.
3. **3 artisan clients have ready outreach drafts but nothing sent**:
   Sartoria Carbone and Antica Legatoria Del Vico both have verified
   emails; sending is currently blocked for Claude in this environment
   (see above) — needs Nikolai to send directly, or to grant the Bash/Gmail
   permission the classifier is asking for if he wants Claude to keep
   doing it.
4. Real photos still wanted for Monego Pigneto, A Testaccio da Max, La
   Casa sugli Alberi — the automated routes are exhausted and documented;
   next real progress there needs a screenshot from Nikolai (Instagram) or
   from someone who can actually load Tripadvisor.
5. Artisan sector is now 3-for-5 on leads found via plain web search
   (sartoria, orologiaio, legatoria hit; calzoleria and a second
   legatoria were false positives — already-good sites, skipped) — still
   worth continuing here (orafo, corniciaio) or returning to B&Bs/
   trattorie in new neighborhoods. Branding extraction (real
   logo/colors/photos before stock, "design one from scratch if nothing
   real exists at all" for logos) stays automatic for every new client.

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
