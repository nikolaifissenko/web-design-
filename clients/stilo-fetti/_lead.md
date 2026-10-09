# stilo-fetti

- **Found:** 2026-10-03/2026-10-05 (independent web search, "negozio
  storico artigiano Roma famiglia dal 19 email contatti sito vecchio")
- **Address:** Via degli Orfani 82, 00186 Roma (a due passi dal
  Pantheon)
- **Phone:** 06.6789662, confirmed in the page text of their own
  homepage contact section.
- **Email:** info@stilofetti.it, confirmed directly in the plain text
  of their own homepage contact section (not a clickable mailto, but
  their own published address), cross-checked via two independent
  fetches. First-party, not a directory listing.
- **Current website:** stilofetti.it. A PrestaShop e-commerce store,
  initially blocked basic curl fetches (bot-protection), resolved per
  `branding-extraction.md` with a real browser User-Agent + Referer.
  Confirmed dal vivo: **16 occurrences of literal `dummy.png`**
  placeholder images still live in the homepage slider, verified
  directly in the HTML, a concrete sign of an unfinished/neglected
  site, not just a subjective "looks old."
- **Sources:** independent web search -> the business's own site
  (stilofetti.it), fetched directly for the real email, phone, history
  text, logo, and real product photos from their own catalog.
- **Status:** outreach-sent (email sent 2026-10-05 to
  info@stilofetti.it, Gmail message ID `1a10ae6bcbafd234`)
- **Response:** no reply yet. Follow-up sent 2026-10-09 (Gmail message
  ID `1a1203600efb050e`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/stilo-fetti/
- **Sold:** no
- **Two other candidates checked and dropped before this one:** Lisio
  Tessuti d'Arte dal 1906 (domain is a parked "sito in costruzione"
  Aruba placeholder, no real site) and Terracina Store (domain doesn't
  resolve via DNS at all). Both dropped for failing today's
  first-party-contact standard rather than guessing a stale email.
- **Notes:**
  - **History is real, confirmed directly in the business's own text,
    not invented.** From their own "Chi Siamo" page: "Stilo Fetti è un
    negozio storico specializzato nella vendita di penne stilografiche
    e articoli da scrittura... Fondato nel 1893, conta oggi oltre 130
    anni di attività." No specific generation count is claimed since
    none could be verified directly (an earlier search summary
    mentioned "fifth generation" but this could not be confirmed on
    the business's own page, so it was dropped rather than repeat the
    kind of unverified claim already flagged for `pianoforti-papi`).
  - **Photos: all real, zero stock, but required third-party-brand
    screening.** Stilo Fetti is the official dealer for Montblanc,
    Parker, Waterman, and a dozen other pen brands, so most of their
    product photos show a competing brand's name prominently (the same
    trap as `massoni`'s vintage jewelry signed by other maisons). All
    of those were avoided. Instead, this demo uses photos from their
    own exclusive "I 7 Re di Roma" collection (pens named for the seven
    kings of Rome, produced for Stilo Fetti itself, not a third-party
    brand): `hero.jpg` is the "Romolo" pen (amber marbled resin, gold
    trim), `about.jpg` is the "Tarquinio Prisco" pen (ivory resin),
    `gallery-1.jpg` is the "Anco Marzio" pen (wood). None carry a
    third-party brand name, only the Roman king each is named for.
  - **Logo: real, genuine separable icon, no redesign needed.** A
    black ink-blot shape with "Stilo Fetti dal 1893" worked into it,
    a distinctive mark (not a plain wordmark). Cropped to content and
    centered on an ivory circular-safe background, the same pattern as
    other real-icon logos (e.g. `massoni`).
  - **Colors:** the ink-blot logo itself is pure black and white, no
    color of its own. Gold `#af8f52` and amber `#683f2d` are sampled
    pixel-by-pixel from the real "Romolo" pen photo instead (its gold
    trim and marbled resin), the same honest approach already used for
    `comandini` and `desanctis-1890` when a real logo is monochrome.
  - Mood: **editorial** (130+ years of continuous history steps from
    the Pantheon), matching the skill's own guidance.
  - No prices published in this demo (their real site shows prices per
    item, but varies too widely by pen/brand to generalize), left
    blank in `config.js`.
  - Hours confirmed via an independent page fetch of their own site:
    Monday 15:00-19:00, Tuesday-Saturday 10:00-19:00, closed Sunday.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). 8 of 10 `.reveal` elements reached `.reveal.in-view`
    after a full-page scroll (consistent with prior demos). Real logo
    image confirmed rendering (not falling back to text initials).
    Gallery lightbox opens on click and closes on Escape. Mobile nav
    toggle present and opens the nav (`nav open` class confirmed at
    390x844 viewport).

## Outreach email (sent 2026-10-05)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos really are the business's own
(their exclusive "7 Re di Roma" collection, carefully screened to
exclude anything showing a competing brand's name), the email does say
"le vostre vere foto." The concrete, verifiable hook is the real,
documented 130+ year history steps from the Pantheon deserving a site
that matches it, not one with unfinished placeholder images. No price
mentioned, no em dashes, plain punctuation, tone warm and respectful
given the genuine heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per Stilo
> Fetti, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/stilo-fetti/
>
> L'ho fatto perché oltre 130 anni di storia a due passi dal Pantheon
> meritano un sito all'altezza, non quello attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
