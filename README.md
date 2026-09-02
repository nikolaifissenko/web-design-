# Lead-Gen Rome

Find small Rome businesses with bad or missing websites, build them a free
demo, sell it for €500 + optional monthly hosting/social retainer.

## Start here (2026-09-02): current pipeline snapshot

Run `python3 scripts/pipeline_status.py` first, it's always the current
source of truth. As of this update:

- **1 decline** (`camiceria-bazzocchi`): replied 2026-08-31, "grazie ma
  non siamo interessati." Closed, no further contact.
- **3 bounced, dead email addresses**, each needs a phone call instead:
  `consorti-cornici` (06 39749127), `bordi-belle-arti` (06 44700346),
  `una-finestra-su-monti` (06 4817640, this one bounced on the follow-up
  only, the original send went through).
- **27 outreach threads still open and waiting** on their normal cadence
  (nothing due for a fresh send or follow-up as of 2026-09-02, all under
  the 3-day follow-up threshold), plus **4 DM/Messenger leads** sent
  2026-08-28 still needing a follow-up nudge, DM channel only, Claude
  cannot send those. Tracked automatically by the recurring pipeline
  check-in Routine (fires every 3 days, drafts any follow-up that comes
  due, checks Gmail for real replies/bounces when reachable).
- **2 new demos built and emailed today**: `torrefazione-foroni` (San
  Giovanni, dal 1920, dead domain, real confirmed email) and
  `salumeria-ciavatta` (Fontana di Trevi, dal 1956, no website anywhere,
  real confirmed email). Both verified live before sending.
- **1 promising lead found but not built**: L'Antico Forno di Fontana di
  Trevi (Via delle Muratte 8, no website anywhere, but a genuinely
  active Instagram with 23K followers, no email found despite a real
  search). Queued, not built, since Claude has no channel to actually
  contact it, same situation as the other DM-only leads.
- **1 lead genuinely phone-only**: Ceccarelli General Trade (ferramenta
  dal 1938, Piazza Sallustio). Its listed email is on a domain with zero
  DNS resolution (not just a dead website, no mail server possible
  either), and no Instagram/Facebook exists despite a real search.
  Needs a phone call (06 4741378) rather than a doomed-to-bounce email.
- **1 lead ruled out after deeper checking**: Antica Macelleria Annibale
  / Mastroddi (via di Ripetta), a historic butcher whose domain had
  expired. Turned out the shop itself closed permanently in January
  2026 after 138 years (confirmed via Gambero Rosso and RomaToday), not
  just a neglected website. Correctly dropped before building anything.
- **1 pipeline-script bug fixed today**: `pipeline_status.py` was about
  to flag `camiceria-bazzocchi` (which already declined) for a
  follow-up, since it had no logic for a decline reply. Fixed, now
  correctly buckets a decline as REPLIED with no action needed.
- **1 ready to send, held for a phone check first**: `ristorante-panzirone`.
  Call 06 6813 4054 and confirm "Ristorante Panzirone, Piazza Navona 73,
  dal 1914?" before sending, a similarly-named business next door needs
  ruling out.
- **1 blocked, needs a decision, not a build**: `il-pastarellaro`. Likely
  closed. Call 06 5810871 or 0658331598 to confirm before doing anything
  else with this lead.
- **1 dropped entirely**: `trattoria-der-pallaro`, turned out to already
  have a separate, modern, current site. Not a lead, no folder left in
  the repo.
- **0 sold so far.**
- Every client folder's `_lead.md` is the single source of truth for that
  business: address, phone, email, exactly what's real vs. stock in the
  demo, and the outreach sent (with Gmail message ID). `README.md`'s
  history sections below are a session-by-session log, useful for context
  on *why* something was done, not for current status, that's what the
  pipeline script is for.

## Status (2026-08-26)

**GitHub Pages is live on this repo** (Settings → Pages → Deploy from
branch `main` / root) — every push to `main` auto-deploys. Each client's
demo URL is `https://nikolaifissenko.github.io/web-design-/clients/<slug>/`.

18 client demos built and live, none sold yet (7 more removed: Testaccio
XIX-XXV — declined; Artigianaio Orologi — pulled since it had no contact
channel at all; 5 more on 2026-08-28, see "Leads not being pursued" below):

| Client | Sector | Neighborhood | Contact channel | Outreach sent? |
|---|---|---|---|---|
| `barbagianni` | bar | Pigneto | Instagram DM / phone | **yes** (Instagram DM, 2026-08-28) |
| `monego-pigneto` | bar | Pigneto | Instagram DM / phone | **yes** (Instagram DM, 2026-08-28) |
| `tinto-lavanderia` | lavanderia | — | email | **yes** (2026-08-26) |
| `autofficina-pisino` | autofficina | Collatino | email | **yes** (2026-08-26) |
| `tanto-pe-magna` | trattoria | Garbatella | Facebook Messenger / phone | **yes** (Facebook Messenger, 2026-08-28) |
| `da-carlone` | trattoria | Trastevere | Instagram DM / phone | **yes** (Instagram DM, 2026-08-28) |
| `trastevereinbed` | B&B | Trastevere | email (verified) | **yes** (2026-08-26) |
| `roma-trasteverina` | B&B | Trastevere | email (found 2026-08-26) | **yes** (2026-08-26) |
| `una-finestra-su-monti` | B&B | Monti | email — **bounced on follow-up, dead now** | attempted, undelivered |
| `sartoria-carbone` | sartoria (artisan) | Prati | email (verified) | **yes** (2026-08-26) |
| `antica-legatoria-del-vico` | legatoria (artisan) | Centro storico (Navona) | email (verified) | **yes** (2026-08-26) |
| `consorti-cornici` | corniciaio (artisan) | Balduina | email — **bounced, dead address** | attempted, undelivered |
| `antica-cappelleria-lombardi` | cappelleria (artisan) | Esquilino | email (verified) | **yes** (2026-08-26) |
| `fratelli-anzilotti` | restauro mobili (artisan) | Prati | email (verified) | **yes** (2026-08-26) |
| `tappezzeria-de-matthaeis` | tappezziere (artisan) | Montesacro | email (verified) | **yes** (2026-08-26) |
| `il-fabbro-artigiano` | fabbro (artisan) | zona Sassonegro | email (verified) | **yes** (2026-08-26) |
| `camiceria-bazzocchi` | camiceria (artisan) | Centro storico (Trevi) | email (verified) | **yes, declined 2026-08-31** |
| `antica-stamperia-trevi` | stamperia (artisan) | Centro storico (Trevi) | email (found on packaging photo, verify by phone first) | **yes** (2026-08-27) |

**Leads not being pursued (2026-08-28, Nikolai's call, demos and lead
files removed from the repo):**
- `a-testaccio-da-max`: no email found
- `la-casa-sugli-alberi`: no email found
- `franchi-argentieri`: no email found
- `pasticceria-boccione`: no email found
- `antico-forno-del-ghetto`: no email found

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
  **Removed 2026-08-26 (later same session)** — see the removal note
  after Round 8 below; kept here as a record of the work.
- Sartoria Carbone's `_lead.md` documents exactly what's real vs.
  substituted, same convention as every client. Both nav bars were
  localized to Italian (Chi siamo/Galleria/Orari/Contatti) — the shared
  template ships these 4 words hardcoded in English in `index.html` (not
  driven by `config.js`), true of every existing client too; fixed on
  just these two rather than scope-creeping into the other 11.

**Round 5 (2026-08-26, same day) — 1 more artisan demo:**

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
- **Outreach emails sent 2026-08-26 to the 2 artisan clients with a
  verified address**: Sartoria Carbone (`info@sartoriacarbone.it`,
  Gmail message ID `1a03fe2d410d54c4`) and Antica Legatoria Del Vico
  (`delvicomaurizio@gmail.com`, Gmail message ID `1a03fe2deb4a8bac`).
  A first attempt this round to send Sartoria Carbone's email was
  denied by the auto-mode permission classifier (it allows `reply` on
  an existing thread, used earlier for the Testaccio thank-you, but not
  a brand-new cold-outreach `send_message` without explicit approval);
  once Nikolai explicitly said to send, it went through normally on
  retry — noting this in case the same block resurfaces on a future
  cold-outreach batch. Artigianaio Orologi still has no email/social —
  phone-only, nothing to send.
- Re-checked the 5 older silent outreach threads (Autofficina Pisino,
  Tinto Lavanderia, Trastevereinbed, Una Finestra su Monti, Roma
  Trasteverina) — still no replies as of this round.

**Incident (2026-08-26): two outreach emails sent with dead demo links,
caught and fixed same day.** The 3 artisan clients built this session
(Sartoria Carbone, Artigianaio Orologi, Antica Legatoria Del Vico) were
committed only to the `claude/email-responses-check-jc26qs` working
branch — never merged into `main`. GitHub Pages serves `main` only, so
`sartoriacarbone`'s and `antica-legatoria-del-vico`'s demo URLs were
returning 404 at the moment their outreach emails went out (the Testaccio
XIX-XXV removal was similarly not live — its old demo was still up).
Nikolai caught it immediately. Fixed by merging the branch into `main`
and pushing; confirmed all 3 new URLs return 200 (and the removed one
correctly 404s) before doing anything else. Sent a short follow-up email
to both affected businesses with the now-working link. **Lesson for every
future session**: after any client add/remove, verify the actual
`nikolaifissenko.github.io/...` URL with `curl` — not just the local
`file://` render — before telling anyone (Nikolai or a business) that a
demo is ready, and before sending any outreach. `main` is the only branch
that matters for whether a link is real.

**Outreach persona updated 2026-08-26 (Nikolai's call): professional, not
a beginner.** Every outreach draft on this repo up to this point opened
with "I recently discovered a passion for web design, it's new to me, I
hope to make it my job one day" — a practicing-beginner framing. Nikolai
asked to drop that and present as a working freelance web designer
instead, keeping the genuine warmth/care but losing the "still learning"
angle. `scripts/pitch_template.md` has the updated standard opening in
both languages — use it for all outreach from now on. The two correction
emails sent above already use the new tone. Existing `_lead.md` outreach
drafts elsewhere in the repo still have the old wording; update a given
client's draft to the new tone if/when sending it (not worth a bulk
find-and-replace across already-sent threads).

**Round 6 (2026-08-26, same day) — 3 more artisan demos (all verified
live on `main` before moving on, per the incident above), plus a
no-email leads list for Nikolai to work Instagram/phone himself:**

- **`consorti-cornici`** (Consorti Cornici, Via Marziale, Balduina) —
  frame-maker/gilder since 1970. Real site is live and technically
  responsive but almost all text, no photos on the homepage — despite
  having a full gallery of great real photos sitting unused. All 5 demo
  photos and the logo (a clean "C" monogram, already square) are pulled
  directly from that real gallery, no redesign needed.
- **`antica-cappelleria-lombardi`** (Antica Cappelleria dell'Urbe
  Lombardi, Via Merulana) — family-run hat shop with a working online
  store, but a dated design. All demo photos are real catalog product
  shots (Borsalino, Stetson, Seeberger). Their real logo (125×96,
  wordmark+icon combined) was too small/rectangular to crop cleanly, so
  a new fedora icon was drawn using colors sampled from their site's own
  CSS.
- **`fratelli-anzilotti`** (Fratelli Anzilotti, Via Lungotevere dei
  Mellini, Prati) — antique furniture restoration since 1968. Real site
  still runs **WordPress 4.6** (a 2016 release, never upgraded in ~10
  years) and the real photo EXIF confirms the same era (Sony camera,
  Lightroom 5.4, dated 2016). Used all 4 available real photos; a 5th
  candidate photo (a 2022 group dinner, uploaded to the same gallery)
  was correctly excluded — not relevant to the craft and shows
  identifiable people in a private context, not something to use in a
  sales pitch. Their real logo is a pure wordmark with no icon at all to
  isolate, so a hand-plane icon was drawn from scratch using the site's
  real gold tones.
- Checked and skipped as false positives (already modern/well-designed,
  not worth competing with): Procopio Calzature, Legatoria Rumori,
  Antica Cappelleria Troncarelli, Cornici Roma Nord (WordPress 6.7,
  actively maintained), Restauro Gianferro (WP 6.6.7), La Bottega Antica
  (WP 6.4.10).

**No-email leads found, not built — for Nikolai to check Instagram/call
directly, per his request this round:**
- **Ombrelli Domizio** (Luca Domizio) — umbrella-maker/leather goods,
  artisan since 1989, Via Prenestina (two conflicting street numbers
  turned up across directories, 273 vs 388 — worth confirming on the
  call). Phone: 06 6400 0428. Their own domain
  (ombrellidomizio.com) redirects but fails to actually load — connection
  error, not just a bad design, so effectively no working site. No email
  found. A genuinely rare trade (very few umbrella-makers left in Rome)
  — good personal-story angle.
- **Gioielleria Marcelli** (goldsmith, Orafi dal 1950) — automated fetch
  blocked (Cloudflare challenge, HTTP 202 with no content), so site
  quality/email presence couldn't be confirmed from here. Worth a manual
  look or call: gioielleriamarcelli.it.
- **Gloves Alberta** (Alberta Migliaccio) — historic handmade leather
  glove shop, Corso Vittorio Emanuele II 18/A (central Rome, a major
  street). Phone: 06 6785753. No website, no email found anywhere —
  Facebook page only (facebook.com/GlovesAlbertaRoma). A rare, dying
  trade — strong personal-story potential.

**Centro storico leads found 2026-08-28** (sourced from the official Albo
Botteghe Storiche di Roma Capitale registry, comune.roma.it: 204
Municipio-I-and-around historic shops, only a fraction checked so far),
real email confirmed, not yet built:
- **Vetrate d'Arte Giuliani** (stained glass/vetrate d'arte, dal 1900),
  Via Garibaldi 55/A, Trastevere. Site (vetrategiuliani.com) returned
  HTTP 503 at check time, effectively down. Email: info@vetrategiuliani.com.
  Phone: 06 5809051.
- **Cartoleria/Tabaccheria F.lli Benincampi** (dal 1950s), Piazza
  Navona 75. Own site (navonainfiore.com) confirmed dated/basic (cluttered,
  unclear hierarchy, early-2010s template). Email:
  tabaccheriabenincampi@gmail.com. Phone: 06 6861509. Prime location,
  strong family-history angle.
- **Roccas Cartoleria / Cartolerie Internazionali** (dal 1896), Via
  Arenula 85. Own site (cartolerieinternazionali.it) confirmed dated/basic
  (placeholder slider, static feel). Email: info@incartoleria.it. Phone:
  06 68801050. Historic Roman-Jewish family business, four generations.
- **Antica Erboristeria Romana** (dal 1752), Via di Torre Argentina 15.
  Own site (anticaerboristeriaromana.it) confirmed severely dated (GIF
  graphics, broken character encoding, no responsive layout). Email
  info@anticaerboristeriaromana.it found via search snippet, not yet
  re-confirmed on the site itself, verify by phone before relying on it,
  same caveat as Antica Stamperia Trevi's packaging-photo email. 350
  medicinal plants on site, one of Rome's oldest herbalists.
- **Bottega Mortet** (laboratorio di cesellatore/engraver, dal 1890),
  Via dei Portoghesi 18. Own site (bottegamortet.com) confirmed dated
  (early-2000s HTML, GIF navigation, no responsive layout). Email:
  info@bottegamortet.com (also andreamortet@gmail.com,
  dantemortet@hotmail.it). Five generations, current owner Dante Mortet
  is a known sculptor (the "Mano Artigiana" project), rich personal-story
  material.
- **Bordi Belle Arti** (colori, vernici, belle arti, art-supply shop,
  "Bottega Storica Eccellenza"), Via dello Statuto 47-49. Site is a
  **Blogspot blog** (bordibellearti.blogspot.com, returned HTTP 503 on
  this check, re-verify when reachable, but a Blogspot address is itself
  a strong bad-website signal). Email: bordi.bellearti@libero.it. Phone:
  06 44700346.
- **Coltelleria Daniela Prezioso** (coltelleria/chincaglieria, dal 1870),
  Via Carlo Alberto 41-41a, Esquilino. Own site
  (coltelleriadanielaprezioso.com) confirmed dated (basic WordPress
  template, uninspired layout). Email info@danielaprezioso.com found via
  a Turismo Roma listing, not yet re-confirmed directly on the site,
  verify by phone before relying on it. Phone: 06 4465797.
- **Libreria Tombolini** (antiquarian bookshop, dal 1874), Via Quattro
  Novembre 146. Domain (libreriatombolini.it) does not resolve at all
  (DNS failure), effectively no working site, same as Ombrelli Domizio's
  broken domain. Email: libreria.tombolini@iol.it. Phone: 06 6795719.
  30,000 titles, historic humanities/philosophy specialist.
- **C.E.R. Tutto per la Ceramica** (ceramics supplies + school, dal 1966),
  near the Colosseum. Site is a bare WordPress.com blog template with
  duplicated posts, no custom branding. Email confirmed on-page:
  cer.annamaria@gmail.com. Oldest ceramics workshop/school in Rome,
  supplies sculptors and ceramicists.
- **Libreria Minerva** (neighborhood bookshop, dal 1923), Piazza Fiume
  57 (Municipio II, just outside centro storico but genuinely central).
  Site (minervalibreria.it, redirects to shop.minervalibreria.it) is
  **broken**: visible unrendered template code ("<!--#4DTEXT...", "Error
  # 59"), legacy 1990s-2000s server tech. One of the worst sites found
  so far. Email: info@minervalibreria.it.
- **Antica Tipografia** (printer, dal 1876), Corso del Rinascimento 24,
  a Piazza Navona. Own site (anticatipografia.it) confirmed dated/basic
  (minimal styling, low-res images, no contemporary refinement). Email:
  info@anticatipografia.it.

**Pivoted to historic trattorie/osterie** (also on the same registry,
Esercizi Commerciali section), much higher hit rate than scattered
artisan trades:
- **Trattoria Da Lucia** (dal 1938, Trastevere), Vicolo del Mattonato
  2B. Domain (trattoriadalucia.com) does not resolve, no working site.
  Doesn't accept card payments either, a strong low-digital-investment
  signal. Email: dalucia1938@gmail.com. Phone: 06 5803601.
- **Trattoria Der Pallaro** (fixed-menu Roman trattoria, Campo de' Fiori
  area), Largo del Pallaro 15. Site (trattoriaderpallaro.it) returned
  HTTP 503 on every check this session, re-verify when reachable.
  Email: info@trattoriaderpallaro.com. Phone: 06 6880 1488.
- **Il Pastarellaro**, Via di San Crisogono 33, Trastevere. No
  independent site found anywhere. Email: ilpastarellaro@libero.it.
  Phone: 06 5810871.
- **Trattoria La Piccola Cuccagna**, Via della Cuccagna 14, near Piazza
  Navona. No independent site found anywhere. Email:
  lapiccolacuccagna@gmail.com. Phone: 06 6861920.
- **Ristorante Panzirone** (dal 1914), Piazza Navona 73. Domain
  (panzirone.it) does not resolve, no working site. Email
  info@panzirone.it found via search but **the domain being dead means
  this address may not deliver either, verify by phone before relying
  on it**, same caution as Antica Erboristeria Romana/Coltelleria
  Prezioso. Phone: 06 68134054.
- **Cantina Cantarini** (Roman/Marchigiana trattoria, dal decades),
  Piazza Sallustio 12. Own site (ristorantecantinacantarini.it)
  confirmed dated/basic (non-functional login form, generic imagery,
  mid-2010s layout). Email is a personal Gmail used as the business
  contact (santinafattori1964@gmail.com), another sign of no real
  digital presence. Phone: 06 4743341.

**Checked and skipped this round** (already professional, closed/
bankrupt, or no email found): Hostaria Da Cesare (Michelin-selected,
modern site), Pasticceria Dagnino (site check inconclusive, JS-heavy),
Bar Capriotti (not found/likely closed), Antica Osteria Da Giovanni
(ambiguous match, no email), Ristorante Il CIAK (dal 1907, Trastevere,
no site/email found, phone only, remarkable cinema-memorabilia decor,
worth a phone-first approach later), Ristorante Da Dante (has a site,
no email found), Bar Lo Zodiaco (bankrupt/closed since 2020), Bar del
Fico (clearly modern, well-marketed, multiple domains), Ristorante
George's (email address was redacted in search results, ownership
seizure news suggests uncertain status), Ristorante Il Matriciano,
Pizzeria Dal Bersagliere (no email found), Ristorante Da Pierluigi
(upscale, modern site), CIN CIN BAR (modern-sounding dedicated domain,
no email found), Antica Birreria Peroni (dal 1906, professional site).

**Checked and skipped, older round** (already have a modern/professional
site, or the only channel found is phone/social, not email, logged so
they aren't re-searched blind): Catello D'Auria (guanti, Squarespace site,
decent), Antica Libreria Cascianelli (Gucci Places partner, clearly
well-presented), Leone Limentani (polished luxury e-commerce site),
Boccanera (calzature, Testaccio, no site or email found, phone only:
06 5756804), Ottica Spiezia (Via del Babuino, "the Pope's optician,"
remarkable story, no site or email found, phone only: 06 3610593),
Gallinelli Alessandro (falegnameria, Via Zara, no site or email found,
phone only: 06 4402219), Onorati Dolciumi (Corso del Rinascimento,
professional-enough site), Stilo Fetti (Montblanc/Parker dealer, modern
e-commerce site), Tebro Biancheria (modern professional site), Antica
Coltelleria Zoppo (via Merulana, Instagram-primary, @anticacoltelleria.zoppo,
no clear standalone site/email confirmed, worth a closer look later),
Domus (calzature/pelletteria, Via Belsiana, no independent site or
email found), Gardino/Cravanzola (decorazioni cavalleresche, Via del
Corso, has an institutional + e-commerce site, gardino.it, likely
already professional, site was down/503 at check time so not fully
confirmed either way), Barberini Stefano (pellami, Via Collina, a
Google Business auto-page, no email confirmed), Sermoneta Enrica
(merceria/haberdashery, Via dei Due Macelli, no site or email found,
phone-only), Bedetti (orologi/preziosi, Piazza San Silvestro,
authorized Rolex dealer, certainly a professional site), Ferramenta
Sorelle Bassano (Municipio II, only a PEC certified-mail address found,
not a normal inbox, and no site), Profumeria Bertozzini (site blocked
automated fetch, HTTP 403, unresolved either way), Cartoleria Pantheon
(dal 1910, Piazza Navona, site blocked automated fetch, HTTP 403, no
email found in search, unresolved either way), Bottega del Marmoraro
(marble plaques, Via Margutta, no site or email found, Facebook/phone
only), Ercoli Cornici (skip, cornici category overlap already covered).

**Second registry checked**: "Albo Negozi Storici di Eccellenza di
Roma Capitale" (settembre 2025 edition, comune.roma.it) pulled and
read. Mostly overlaps businesses already covered above (Tebro, Bordi
Belle Arti, Camiceria Bazzocchi, Bottega Mortet, Gioielleria Lefèvre).
One new name, Bedetti, already checked and skipped above (see list).
Not a big additional source, worth returning to the original 204-shop
registry's remaining ~80 unchecked Municipio-I entries instead.
- **Amenio Raponi** (luthier/liutaio) — Via della Magliana Nuova 196.
  Phone: 06 55268600 / cell 339 8675177. Real site has an excellent
  photo portfolio (guitars, violins, mandolas, a hurdy-gurdy
  reproduction, a maker's label) but genuinely **no email anywhere** —
  only a contact form, checked directly in the raw HTML, no `mailto:`
  link at all. A rare craft with great material once contact is made.

**Round 7 (2026-08-26, same day) — 1 more artisan demo:**

- **`tappezzeria-de-matthaeis`** (Tappezzeria De Matthaeis, Via Gran
  Sasso, Montesacro) — upholstery/curtain workshop, founded in the 1960s
  by Vittorio De Matthaeis, now run by his sons Marco and Stefano. Real
  site is visually stuck in early-2000s static-HTML style, but sits on
  top of 100+ real job photos (EXIF-verified, genuine client cameras)
  plus a great showroom shot — none of it given any real design
  treatment. Used 5 of those real photos for the demo (one cropped to
  remove a watermark). No usable logo existed — the only graphic on
  their site is an outdated "60 Anni 2020" anniversary badge, not a
  business mark — so a new armchair icon was drawn using the maroon/gold
  sampled from their real CSS. Checked and skipped Claudio Radicchi
  (tappezziere) as a false positive — already a well-designed site.

**Round 8 (2026-08-26, same day) — 1 more artisan demo, first case of
legitimate documented stock use this session:**

- **`il-fabbro-artigiano`** (Il Fabbro Artigiano / Varm di Ricciardella
  Angelo, zona Sassonegro) — family blacksmith. Real site runs
  **CMSimple 4.6.1** (a niche flat-file CMS, 2016) with a Facebook SDK
  pinned at v2.5 — concrete, dated signals. Their real work gallery uses
  a JS-driven lightbox plugin (sfPhotoGallery) that loads images via
  JavaScript, not present in the static HTML — genuinely unreachable
  with the tools available in this session, not just unchecked. Only 1
  real photo was recoverable (a homepage welcome image: a wrought-iron
  gate + a blacksmith hammering hot metal), used for `about`. The other
  3 images are well-matched Unsplash stock (a real blacksmith at an
  anvil with sparks, a forging-detail close-up, an ornate scrollwork
  gate) — documented explicitly as the first case this session where
  stock was used because a real source exists but is technically
  unreachable, not because it wasn't checked. Their real logo is a
  low-res 2000s bevel-clipart wordmark, so a new anvil-and-hammer icon
  was drawn using the orange (`#ff6600`) from their site's own CSS.
  Checked and skipped Arduini Artigiani del Ferro (WordPress 7.1,
  already modern) as a false positive.

**Artigianaio Orologi removed (2026-08-26, later same session).** Built
in Round 4 (see above) as a genuinely strong lead — zero digital
presence at all, a real story — but it turned out to have no contact
channel whatsoever: no email, no Instagram/Facebook, no website, and no
phone/WhatsApp number Nikolai had actually confirmed reachable. Nikolai
asked for a DM draft, then decided to pull the client rather than leave
a demo sitting live with no realistic path to delivering it. Removed the
whole `clients/artigianaio-orologi/` folder — nothing of it survives
except this note and the Round 4 write-up above (kept as a record of the
work, including the custom pocket-watch logo design, in case the lead is
revisited later with an actual number in hand). Same treatment as
Testaccio XIX-XXV: delete outright rather than leave a dead demo live.
If Nikolai does get a number for Daniele Merelli (06 4742284) later,
rebuilding is quick — the branding/photo research in the old Round 4
notes above is all still valid, only the files need recreating.

## Session closed 2026-08-26 — status as of here, pick up from this list

**18 demos built, all 12 with a verified email have been emailed**
(nothing pending on Claude's side for any client that has a working
contact channel). **1 reply so far**: Testaccio XIX-XXV declined, demo
removed. The other 11 sent threads are all still silent as of this
session's last check. Artigianaio Orologi was built, then removed later
the same session (no usable contact channel — see note above) — it is
**not** one of the 18 live demos.

**Next up (in priority order):**
1. **Nikolai to send the 4 DM messages** (Barbagianni, Monego Pigneto,
   Da Carlone, Tanto pè Magnà) — Claude cannot send Instagram DMs.
   Screenshots + exact text are ready in each `_lead.md`.
3. **Nikolai to work the 4 no-email leads found but not built** (see
   "No-email leads found, not built" above): Ombrelli Domizio,
   Gioielleria Marcelli, Gloves Alberta, Amenio Raponi. Find an
   Instagram/email or call directly — once a channel exists, a future
   session can build the demo.
4. Real photos still wanted for Monego Pigneto — automated routes
   exhausted and documented; next progress needs a screenshot from
   Nikolai (Instagram).
5. **Next session: a new session should re-check all 11 silent threads
   first** (`get_thread` on the Gmail message IDs in each `_lead.md`)
   before doing anything else — a reply may change what's worth building
   next.
6. Artisan sector has been productive via plain web search (sartoria,
   orologiaio, legatoria, corniciaio, cappelleria, restauro mobili,
   tappezziere, fabbro all hit; several false positives skipped along
   the way, listed inline above) — worth continuing (orafo, calzolaio,
   ceramista) or returning to B&Bs/trattorie in new neighborhoods.
   Branding extraction (real logo/colors/photos before stock, design one
   from scratch if nothing real exists, stock only when a real source is
   checked and either absent or technically unreachable) stays automatic
   for every new client. **Always verify the actual
   `nikolaifissenko.github.io` URL returns 200 before sending outreach —
   a demo committed only to a feature branch will 404 even though it
   renders fine locally** (see the incident logged above).

**Lead-finding approach that actually worked**, vs. what's below: manual
web search (business type + neighborhood), then verify no website or
that the website is bad by fetching it, then check for a public email
or Instagram/Facebook handle before building. This last step is not
optional, see CLAUDE.md, "A lead needs a real contact channel before
it's considered done": a lead reported as done without that check
having actually happened is not done. A dead domain (was once listed,
no longer resolves) counts as a strong lead, check with `curl`/DNS,
it's arguably a worse look than never having had a site. `find_leads.py`
(Google Places API) was never actually used this way, it requires an
API key that was never set up.

## Round 9 (2026-08-27): Centro Storico, 5 new demos built

Also this session: a template-wide visual polish pass (scroll-reveal,
gallery lightbox, hero motion, see `.claude/skills/professional-web-design/`)
and a per-client "mood" system (editorial/rustic/bold/boutique layout
variants matched to each business's actual character, replacing the
one-size-fits-all look), rolled out to all 18 clients from that point,
then to the 5 new ones below as they were built (23 total).

Sourced 5 new leads via manual search (starting from Roma Capitale's
official Albo Botteghe Storiche, the historic-shops registry), all
genuinely in the centro storico, a neighborhood underrepresented until
now (only `antica-legatoria-del-vico` was properly centro before this
round). All 5 were then built as full demos (real branding/photos, see
`_lead.md` in each client folder for exact sourcing and per-client
notes). 3 of the 5 (Pasticceria Boccione, Antico Forno del Ghetto,
Franchi Argentieri) were dropped 2026-08-28, no email found for any of
the three, see "Leads not being pursued" near the top of this file. The
2 still live:

| Business | Sector | Address | Mood | Site status found |
|---|---|---|---|---|
| `antica-stamperia-trevi` | stamperia/tipografia, dal 1780 (la più antica d'Europa) | Via dell'Umiltà 84/85, Trevi | editorial | no independent website; real email found printed on packaging in a press photo, not via search, verify by phone before relying on it |
| `camiceria-bazzocchi` | camiceria su misura, dal 1907 | Via del Tritone 141, Trevi | boutique | has own site (camiceriabazzocchi.it) but dated WordPress template; email verified |

Antica Stamperia Trevi needed a logo **redesigned** from a real mark
that didn't crop cleanly (a blurry photographed wax-seal), following
`branding-extraction.md`'s process, not a straight crop, not initials.
Camiceria Bazzocchi's logo *did* crop cleanly (top-hat + "B" portion of
their wordmark).

This round also caught and fixed a real template bug: a client with no
real "about" photo available exposed that `about.image: ""` left a
blank half-column gap in the default two-column layout. Fixed in the
shared template (`template/css/style.css`, a `:has(> img.hidden)` rule
collapsing to one centered column) and propagated to all clients, inert
for everyone else since no other client currently omits the about image.

One false positive checked and dropped: **Antica Barberia Peppino**
(Via della Vite, Colonna) turned out to have a genuinely modern,
professional, mobile-responsive site (anticabarberia.it, 2023 copyright).
Not a lead, don't reconsider without a fresh site check.

## Round 10 (2026-08-28): 5 trattorie sourced, 3 built, 2 held back

5 leads were scaffolded this round: `trattoria-der-pallaro`,
`il-pastarellaro`, `la-piccola-cuccagna`, `ristorante-panzirone`,
`cantina-cantarini`. Checking each before building (per the standing
rule of verifying, not assuming, before treating a lead as ready) turned
up two that aren't valid leads as originally picked:

- **`trattoria-der-pallaro`, dropped, false positive.** The domain
  first found (trattoriaderpallaro.it) is dead (503), but the business
  actually runs a different, current domain (`derpallaro.it`): a
  genuinely modern WordPress/Divi site with online booking, recent
  (2025) photo uploads, mobile-responsive. Same pattern as Antica
  Barberia Peppino in Round 9, already has a good site under a domain
  the first search missed. Folder removed from the repo.
- **`il-pastarellaro`, held back, not dropped.** Strong but not
  airtight signals the historic business (Via di San Crisogono 33, dal
  1952) is closed: near-bottom Tripadvisor ranking, most recent review
  from 2019, a restaurant-listing site's own status marking it closed.
  A *different-named* business ("Pastarellaro Di Severino") shows up at
  the same address with a more recent (March 2025) listing update and a
  different phone number, which could be a rename/succession or could
  be aggregator confusion. Scaffold kept (not deleted) but deliberately
  **not built**: `config.js` still the unedited template, with a
  comment pointing to `_lead.md`, pending a phone call to confirm
  which, if either, name is currently operating there. See
  `clients/il-pastarellaro/_lead.md` for the full reasoning and what
  would resolve it.

The remaining 3 were built as full demos, all mood `rustic` (family
trattorie/hostarie, consistent with `da-carlone`/`tanto-pe-magna`):

| Business | Address | Site status found | Real photos |
|---|---|---|---|
| `cantina-cantarini` | Piazza Sallustio 12 | has own site, but a 2014-era CMS build with no real mobile layout | yes: logo, hero, and all gallery/about photos pulled directly from their own site (one cross-verified via a 2019 press feature); 2 newer photos on their site rejected as likely stock (EXIF timestamp matches upload time exactly, one dish isn't even on their menu) |
| `ristorante-panzirone` | Piazza Navona 73 | historic domain (panzirone.it) is dead; a `.shop` site claiming to be theirs reads as AI-generated/placeholder, not used for anything | yes: all 4 photos real, sourced from piatti.menu and identified by a distinctive checkered tablecloth matching independent review mentions; no real logo found anywhere, used text initials rather than guess at a redesign |
| `la-piccola-cuccagna` | Via della Cuccagna 14 | no website ever existed; real Instagram (35K followers) and Facebook confirmed | partial: 2 real photos (their own menu board, clearly branded) used for about/gallery; hero is disclosed stock, chosen to match the real checkered tablecloth seen in the real photos, after piatti.menu's photos for this specific listing turned out to be mismatched to other restaurants (a real data-quality issue on the aggregator, confirmed by checking pixel content against the metadata tag) |

`ristorante-panzirone` carries an open question worth flagging before
outreach: a second, similarly-named business ("Antica Trattoria
Panzirone") is listed one door down (Piazza Navona 72 vs. 73). Not
used as a source for anything here, to avoid misattributing branding,
but worth a quick phone confirmation before sending the demo. Full
detail in each client's `_lead.md`. No outreach drafted or sent for any
of the 3 built demos yet this round.

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
