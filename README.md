# Lead-Gen Rome

Find small Rome businesses with bad or missing websites, build them a free
demo, sell it for €500 + optional monthly hosting/social retainer.

## Status (2026-08-26)

**GitHub Pages is live on this repo** (Settings → Pages → Deploy from
branch `main` / root) — every push to `main` auto-deploys. Each client's
demo URL is `https://nikolaifissenko.github.io/web-design-/clients/<slug>/`.

23 client demos built and live, none sold yet (2 more removed: Testaccio
XIX-XXV — declined; Artigianaio Orologi — pulled since it had no contact
channel at all, see below):

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
| `sartoria-carbone` | sartoria (artisan) | Prati | email (verified) | **yes** (2026-08-26) |
| `antica-legatoria-del-vico` | legatoria (artisan) | Centro storico (Navona) | email (verified) | **yes** (2026-08-26) |
| `consorti-cornici` | corniciaio (artisan) | Balduina | email — **bounced, dead address** | attempted, undelivered |
| `antica-cappelleria-lombardi` | cappelleria (artisan) | Esquilino | email (verified) | **yes** (2026-08-26) |
| `fratelli-anzilotti` | restauro mobili (artisan) | Prati | email (verified) | **yes** (2026-08-26) |
| `tappezzeria-de-matthaeis` | tappezziere (artisan) | Montesacro | email (verified) | **yes** (2026-08-26) |
| `il-fabbro-artigiano` | fabbro (artisan) | zona Sassonegro | email (verified) | **yes** (2026-08-26) |
| `franchi-argentieri` | argentiere/orafo (artisan) | Centro storico (Navona) | phone/WhatsApp/Instagram DM (no email found) | no |
| `camiceria-bazzocchi` | camiceria (artisan) | Centro storico (Trevi) | email (verified) | **yes** (2026-08-27) |
| `antica-stamperia-trevi` | stamperia (artisan) | Centro storico (Trevi) | email (found on packaging photo, verify by phone first) | **yes** (2026-08-27) |
| `pasticceria-boccione` | forno/pasticceria kosher | Centro storico (Ghetto) | Instagram DM (@pasticceria.boccione) / phone | no |
| `antico-forno-del-ghetto` | forno/panificio kosher | Centro storico (Ghetto) | Facebook Messenger / phone | no |

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
2. **Nikolai to call/WhatsApp the phone-only clients**: La Casa sugli
   Alberi (landline), A Testaccio da Max (WhatsApp) — drafts ready in
   each `_lead.md`.
3. **Nikolai to work the 4 no-email leads found but not built** (see
   "No-email leads found, not built" above): Ombrelli Domizio,
   Gioielleria Marcelli, Gloves Alberta, Amenio Raponi. Find an
   Instagram/email or call directly — once a channel exists, a future
   session can build the demo.
4. Real photos still wanted for Monego Pigneto, A Testaccio da Max, La
   Casa sugli Alberi — automated routes exhausted and documented; next
   progress needs a screenshot from Nikolai (Instagram) or from someone
   who can load Tripadvisor.
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
web search (business type + neighborhood), then verify no website /
website is bad by fetching it, then check for a public email or
Instagram/Facebook handle before building. A dead domain (was once
listed, no longer resolves) counts as a strong lead — check with
`curl`/DNS, it's arguably a worse look than never having had a site.
`find_leads.py` (Google Places API) was never actually used this way —
requires an API key that was never set up.

## Round 9 (2026-08-27) — Centro Storico: 5 new demos built

Also this session: a template-wide visual polish pass (scroll-reveal,
gallery lightbox, hero motion — see `.claude/skills/professional-web-design/`)
and a per-client "mood" system (editorial/rustic/bold/boutique layout
variants matched to each business's actual character, replacing the
one-size-fits-all look) — rolled out to all 18 clients from that point,
then to the 5 new ones below as they were built (23 total).

Sourced 5 new leads via manual search (starting from Roma Capitale's
official Albo Botteghe Storiche / historic-shops registry), all genuinely
in the centro storico — a neighborhood underrepresented until now (only
`antica-legatoria-del-vico` was properly centro before this round). All 5
were then built as full demos (real branding/photos, see `_lead.md` in
each client folder for exact sourcing and per-client notes):

| Business | Sector | Address | Mood | Site status found |
|---|---|---|---|---|
| `pasticceria-boccione` (Forno Boccione) | forno/pasticceria kosher, dal ~1770 | Via del Portico d'Ottavia 1, Ghetto | vintage | no website; real Instagram found on a second pass, @pasticceria.boccione |
| `antico-forno-del-ghetto` (Urbani) | forno/panificio kosher, dal 1927 | Piazza Costaguti 30-32, Ghetto | vintage | no website; real Facebook page found on a second pass (name match, content unverified); also genuinely photo-poor (only 1 real photo found after checking 8+ sources) |
| `antica-stamperia-trevi` | stamperia/tipografia, dal 1780 (la più antica d'Europa) | Via dell'Umiltà 84/85, Trevi | editorial | no independent website; real email found printed on packaging in a press photo, not via search — verify by phone before relying on it |
| `franchi-argentieri` | argenteria/oreficeria, dal 1944 | Via di Tor di Nona 60, Navona | boutique | has own site (franchiargentieri.it) but dated (jQuery 1.7.1, IE6/8 compat, circa 2010-2012); no email, phone/WhatsApp/Instagram only |
| `camiceria-bazzocchi` | camiceria su misura, dal 1907 | Via del Tritone 141, Trevi | boutique | has own site (camiceriabazzocchi.it) but dated WordPress template; email verified |

Two of the five (Franchi Argentieri, Antica Stamperia Trevi) needed a
logo **redesigned** from a real mark that didn't crop cleanly — a bear
emblem fused into the wordmark, and a blurry photographed wax-seal —
following `branding-extraction.md`'s process, not a straight crop, not
initials. Camiceria Bazzocchi's logo *did* crop cleanly (top-hat + "B"
portion of their wordmark). Boccione and Antico Forno del Ghetto have no
findable logo at all — legitimate text-initials fallback for both.

This round also caught and fixed a real template bug: a client with no
real "about" photo available (`antico-forno-del-ghetto`) exposed that
`about.image: ""` left a blank half-column gap in the default two-column
layout. Fixed in the shared template (`template/css/style.css`, a
`:has(> img.hidden)` rule collapsing to one centered column) and
propagated to all 23 clients — inert for everyone else since no other
client currently omits the about image.

One false positive checked and dropped: **Antica Barberia Peppino**
(Via della Vite, Colonna) — turned out to have a genuinely modern,
professional, mobile-responsive site (anticabarberia.it, 2023 copyright).
Not a lead — don't reconsider without a fresh site check.

**Mood iteration on the two Ghetto clients.** Boccione and Antico Forno
del Ghetto started on "rustic," then got their own dedicated "imperial"
mood (Trajan-style capitals, Roman numerals, marble-plaque photo
framing), then that was scrapped same day on feedback: Roman-imperial
iconography doesn't fit two Jewish Ghetto institutions, and it read cold
rather than dignified. Renamed to "vintage" and rebuilt around 1920s to
1960s Italian shop-packaging character instead: a warm rounded display
serif (Yeseva One), a market-placard price list with a dashed rule and a
rounded price-tag badge, and photos framed like an old family print
(white border, sepia toning that clears to full color on hover). Both
clients now use "vintage."

Sector note: two Ghetto bakeries + a printer + a silversmith + a shirt
maker is good diversity (no overlap with existing cappelleria/legatoria/
corniciaio/restauro-mobili/tappezziere/fabbro roster). The two Ghetto
forni are especially strong material — both are among the most-written-
about historic food spots in Rome, which means real press photos should
be findable per `branding-extraction.md` before falling back to anything
else.

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
