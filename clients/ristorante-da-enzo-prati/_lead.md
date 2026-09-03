# ristorante-da-enzo-prati

- **Found:** 2026-09-03
- **Address:** Via Ennio Quirino Visconti 39-41, 00193 Roma (Prati, Municipio I)
- **Phone:** 06 3215743
- **Current website:** none — only booking-platform pages (OpenTable, TheFork, Quandoo, RomaToday)
- **Instagram:** https://www.instagram.com/ristorantedaenzoprati/
- **Facebook:** https://www.facebook.com/ristorantedaenzoprati (591 "mi piace", attiva)
- **Sources:** OpenTable/TheFork/Quandoo/Virgilio Aziende (address, phone, hours), Quandoo photo gallery (real interior/food photos).
- **Status:** demo-built, outreach drafted for Nikolai to send via Instagram/Facebook
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/ristorante-da-enzo-prati/ (not live yet — built on a working branch, not merged to `main`; won't resolve until merged and Pages redeploys)
- **Sold:** no
- **Notes:**
  - No email found anywhere: Virgilio Aziende's business listing explicitly shows no email field for this business, checked directly, not just "not searched." Outreach channel is Instagram DM and/or Facebook message only.
  - A classic, slightly retro Prati restaurant near the courts, popular with lawyers and politicians; Roman cooking with an Amalfi-coast inflection (fried fish, lemons). No explicit founding year found anywhere searched — not invented, the copy stays on "storico"/"da sempre" without a date.
  - Prices not published anywhere online — left blank in `js/config.js`, confirm in person.
  - Opening hours (Mon-Sat 12:30-15:00 / 19:30-23:00, closed Sunday) cross-checked across two independent sources (search aggregation + Pagine Gialle), consistent.
  - **Photos are all real, no stock.** Source: the restaurant's own Quandoo photo gallery (`quandoo.it/place/ristorante-da-enzo-via-ennio-quirino-visconti-prati-53021/immagini`), 12 professional photos of the actual restaurant, fetched via direct `qul.imgix.net` CDN URLs (browser UA, per `branding-extraction.md`) and verified as real JPEGs, not blocked-page HTML. `hero.jpg` = the real storefront on Via Ennio Quirino Visconti (the "DA ENZO RISTORANTE" awning and entrance are visible). `about.jpg` = a real dining room inside (white tablecloths, wall prints, Vienna-straw chairs). `gallery-1.jpg` = real fritto misto di paranza. `gallery-2.jpg` = real rucola e parmigiano salad. `gallery-3.jpg` = real melanzane alla parmigiana. `gallery-4.jpg` = real caprese di bufala.
  - **No logo exists** — only lettering painted on the storefront awning (visible in `hero.jpg`), not a standalone graphic mark to adapt. Instagram/Facebook are confirmed unreachable by automated fetch (client-rendered apps, no static photo URLs), so there's no profile-picture logo to crop either. Fell back to `logoText` ("DE"), the same legitimate case as Trattoria Da Lucia — a small family restaurant with genuinely no graphic mark anywhere, not a shortcut around an awkward-to-crop real one.
  - **Colors are real**, sampled pixel-by-pixel from `hero.jpg` with PIL: deep burgundy of the awning (`#482028`, primary) and the warm wood tone of the entrance door (`#ae804c`, accent).
  - Mood: `rustic` (trattoria/family-restaurant warmth fits; this isn't a heritage-with-founding-date story so `vintage`/`editorial` weren't a fit).

## Outreach draft (for Nikolai to send via Instagram DM or Facebook message)

Follows the standard `pitch_template.md` structure (Version A, light touch):
link right after the greeting, one reframe sentence pairing the concrete
problem with something genuinely good about the place, no price, no
invented personal visit, plain punctuation. **Attach a screenshot of the
demo** (`clients/ristorante-da-enzo-prati/screenshots/demo-preview.png`)
rather than relying on a bare link, per `branding-extraction.md` — a link
alone often doesn't preview in a DM.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito di Da Enzo, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/ristorante-da-enzo-prati/
>
> L'ho fatto perché oggi online si trovano solo le pagine delle piattaforme di prenotazione e nessun sito vero, e per un ristorante che a Prati è un punto di riferimento da sempre mi sembrava un peccato non avere una presenza che gli rendesse giustizia.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere parlarne. Resto a disposizione anche solo per un parere sincero, o mi può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416

Send via Instagram DM to @ristorantedaenzoprati, or as a Facebook message to facebook.com/ristorantedaenzoprati. Not sent yet — Nikolai sends it himself, Claude has no channel to deliver an Instagram DM or Facebook message directly.
