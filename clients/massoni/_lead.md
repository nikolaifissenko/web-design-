# massoni

- **Found:** 2026-10-01 (independent web search, "negozio artigiano
  storico Roma famiglia dal 19 email contatti sito vecchio")
- **Address:** Via Margutta 54/A, 00187 Roma
- **Phone:** 06 3216916, found directly in the footer text of their own
  Contatti page.
- **Email:** massoni.info@gmail.com, found directly in the footer text
  of their own Contatti page, confirmed via curl (200). First-party
  (their own published contact), not a directory listing, even though
  it's a Gmail address rather than their own domain.
- **Instagram:** https://www.instagram.com/massoniofficial/ (linked
  from their own homepage).
- **Facebook:** https://www.facebook.com/MassoniJewelry (linked from
  their own homepage).
- **Current website:** massoni.it. Confirmed dal vivo via curl: a real,
  functioning own-domain site, but concretely dated: jQuery 1.9.1
  (2013), owl-carousel, an old Bootstrap build, and a stylesheet
  history of incremental patches (`style.css`, then `style2021.css`,
  then `style2023.css`) rather than a real redesign. Their own
  "Contatti" page itself renders a "404"/"VERSIONE TESTING" error
  state while still showing the real footer/address/phone, a concrete,
  non-subjective sign of neglected maintenance.
- **Sources:** independent web search -> the business's own site
  (massoni.it), fetched directly for the real email, phone, history
  text, logo, and real product photos from their own "Acquista" page.
- **Status:** outreach-sent (email sent 2026-10-01 to
  massoni.info@gmail.com, Gmail message ID `1a0f651812ddd320`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/massoni/
- **Sold:** no
- **One other candidate lead checked and dropped today:** Emiliozzi
  (Sanitaria/Ortopedia, dal 1904, four generations, Via Tomacelli 104).
  Real email confirmed (info@emiliozzi.it), but the live site turned
  out to be a well-maintained, actively-updated WooCommerce store
  (recent WordPress/WooCommerce versions, working shop with current
  inventory, no signs of neglect). Since this project's premise is
  businesses with a bad or missing website, this one doesn't qualify,
  so no demo was built.
- **Notes:**
  - **History is real, confirmed directly in the business's own text,
    not invented.** From their own homepage (English version): "In the
    1790 Pietro Massoni has laid the foundation of what, handed down
    from father to son from over 200 years, is one of the most beloved
    brand of the roman jewelry... In 2006 Carlo and Giuseppe Massoni,
    mindful of the tradition of seven generations... decided to move
    their corporate headquarter to the magnificent Via Margutta."
    Seven generations, founded 1790 (236 years), both stated directly
    by the business itself.
  - **Photos: all real, zero stock, but required careful screening for
    third-party brands.** This business's core trade is vintage/estate
    jewelry, so most of their own real photos are of pieces originally
    made by other famous maisons, explicitly labelled as such in the
    site's own alt text (e.g. "Sapphire earrings signed Bulgari",
    "Alhambra necklace signed Van Cleef & Arpels"). The homepage's own
    hero slider is entirely Bulgari-signed vintage pieces. Using any of
    these would misattribute another brand's work to Massoni in this
    demo, the exact third-party-brand trap CLAUDE.md warns about, so
    all of them were avoided. The three photos actually used, from the
    "Acquista" page, carry no third-party signature in either the alt
    text or the piece itself (checked visually, not just by alt text):
    `hero.jpg` is a gold and diamond honeycomb-pattern bracelet,
    `about.jpg` is an Australian pearl necklace with a diamond clasp,
    `gallery-1.jpg` is a three-stone sapphire and diamond ring.
  - **Logo: real, genuine separable icon, no redesign needed.** A red
    wax-seal with an "M" monogram sits above the "MASSONI" wordmark.
    Cropped to just the seal, trimmed to its content, and centered with
    padding on an ivory circular-safe background, the same pattern as
    other leads with a real separable icon (e.g. `studio-cassio`,
    `centro-restauro-tappeti`).
  - **Colors:** red `#c52711`, sampled pixel-by-pixel from the real
    wax-seal in the logo, and gray `#83868c`, sampled pixel-by-pixel
    from the real "MASSONI" wordmark in the same logo file.
  - Mood: **editorial** (236 years of continuous, documented family
    history across seven generations), matching the skill's own
    guidance.
  - No prices published anywhere (jewelry priced individually, often
    by appointment), left blank in `config.js`.
  - Hours not confirmed in any source checked (their own site notes
    "by appointment" in some listings, not confirmed directly on their
    current site), left as "da confermare" / "su appuntamento", worth
    a call before a sale.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). 8 of 10 `.reveal` elements reached `.reveal.in-view`
    after a full-page scroll (consistent with prior demos). Real logo
    image confirmed rendering (not falling back to text initials).
    Gallery lightbox opens on click and closes on Escape. Mobile nav
    toggle present and opens the nav (`nav open` class confirmed at
    390x844 viewport).

## Outreach email (sent 2026-10-01)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos really are the business's own
(carefully screened to exclude anything showing another brand's
signature), the email does say "le vostre vere foto." The concrete,
verifiable hook is the site's own dated technical stack for a business
with 236 years of real, documented history across seven generations.
No price mentioned, no em dashes, plain punctuation, tone warm and
respectful given the genuine, exceptional heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per
> Massoni, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/massoni/
>
> L'ho fatto perché 236 anni di storia e sette generazioni della stessa
> famiglia meritano un sito moderno, non quello attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
