# eufemi-stampe-antiche

- **Found:** 2026-09-25 (independent web search, "negozio stampe
  antiche Roma famiglia storico sito email contatti")
- **Address:** Via Francesco Crispi 93, 00187 Roma (vicino Piazza di
  Spagna)
- **Phone:** 06 3105 9717
- **Email:** massimo.eufemi@libero.it, found directly in the text of
  their own Contatti page (eufemistampe.com/contatti, embedded in the
  page's own schema.org description: "potete contattarci allo
  0631059717 oppure via email a massimo.eufemi@libero.it"), confirmed
  via curl, not a directory listing.
- **Facebook:** https://www.facebook.com/Eufemistampeantiche/ (found
  via independent search, real, activity not independently verified
  since Facebook blocks automated fetch as always).
- **Current website:** eufemistampe.com. Confirmed dal vivo via curl:
  WordPress 5.9.18, several versions behind current.
- **Sources:** independent web search -> the business's own site
  (eufemistampe.com), fetched directly for the real email, the real
  history text, and real photos (their own site's own media uploads).
- **Status:** outreach-sent (email sent 2026-09-25 to
  massimo.eufemi@libero.it, Gmail message ID `1a0d76c9bd9e4f74`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/eufemi-stampe-antiche/
- **Sold:** no
- **Notes:**
  - **Everything on this demo is real, zero stock.** The family's
    interest in antique prints began in 1959 when the grandfather
    started selling prints and art books in Rome's best shops. In 1971
    his son picked up the same passion and continued it for thirty
    years before opening his own shop. The third generation, Massimo
    Eufemi, opened the current shop (originally in Piazza Cavour in
    2003, later moved to the current Via Francesco Crispi address).
    Summarized honestly from the real "Chi siamo" text on their own
    site, not invented.
  - **Photos, all real, zero stock, all from their own site's own media
    uploads.** All four images were downloaded directly from
    eufemistampe.com's own upload folder, with original camera
    filenames (`IMG_20200226_...`, `IMG_20200622_...`) and EXIF data
    confirming a real Xiaomi Mi 9T Pro phone camera, proof these are
    genuine photos taken by the owner, not stock. `hero.jpg` is the
    real shop storefront at number 93, with the "Eufemi STAMPE ANTICHE
    - ANTIQUE PRINTS" sign and real prints displayed in the window.
    `about.jpg` is a real antique hand-colored map of Rome ("Urbis
    Romae Veteris ac Modernae Accurata Delineatio") they have for sale.
    `gallery-1.jpg` is a real antique print of the Colosseum ("Veduta
    dell'Anfiteatro Flavio, detto il Colosseo"). `gallery-2.jpg` is a
    real antique botanical print, framed.
  - **Logo: real logo exists, but is a connected cursive wordmark
    ("Eufemi") with no separable icon/monogram to crop**, unlike other
    leads on this repo with a genuine circular mark (e.g.
    `cristiana-perali`, `ottica-la-barbera`). Cropping just one letter
    out of a connected script would produce an illegible fragment, not
    a clean icon, so per CLAUDE.md's guidance this is a real, defensible
    case for text initials rather than a lazy default: "E" is used, but
    in the real colors sampled directly from their logo file (see
    below), not invented ones.
  - **Colors:** navy blue `#221c5c`, sampled pixel-by-pixel from the
    darkest point of the real logo's script. The real logo is
    monochrome (navy on cream), so there's no second real color to
    sample for an accent: aged gold `#b08d4f` was chosen by hand to
    match the aged paper tone visible in the real antique prints
    photographed, not sampled from the logo.
  - Mood: **editorial** (heritage business with a strong, documented
    three-generation founder story: grandfather 1959 -> father 1971 ->
    Massimo 2003), matching the skill's own guidance.
  - No prices published anywhere (antique prints priced individually
    depending on rarity/condition), left blank in `config.js`.
  - Hours not confirmed in any source checked, left as "da confermare,"
    worth a phone call to verify before a sale.
  - Smoke-tested with Playwright: no console errors beyond the known
    sandbox restriction (Google Fonts/Maps blocked network-side, not a
    real bug). 11 elements reached `.reveal.in-view` on scroll. Gallery
    lightbox opens on click. Mobile nav toggle present and opens the
    nav (`nav open` class confirmed at 390x844 viewport).

## Outreach email (sent 2026-09-25)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the site's own
technical datedness (WordPress 5.9.18, several versions behind) for a
business built on three real generations of family passion for antique
prints. No price mentioned, no em dashes, plain punctuation, tone warm
and respectful given the real, documented multi-generation history.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per Eufemi
> Stampe Antiche, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/eufemi-stampe-antiche/
>
> L'ho fatto perché il vostro sito attuale è rimasto tecnicamente
> indietro di qualche anno, e mi sembrava un peccato per un'attività
> che porta avanti tre generazioni di passione per le stampe antiche,
> dal nonno nel 1959 fino a oggi.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
