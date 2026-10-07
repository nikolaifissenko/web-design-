# buccone

- **Found:** 2026-10-07 (Turismo Roma "botteghe storiche" directory,
  page 2, "Buccone Vini, Olii, Liquori dal 1870")
- **Address:** Via di Ripetta 19/20, 00186 Roma
- **Phone/Fax:** 06 3612154, found directly on their own Contatti
  page.
- **Email:** info@enotecabuccone.com, found directly in a hidden
  form field (`<input type="hidden" name="recipient"
  value="info@enotecabuccone.com">`) in their own contact form's
  HTML. First-party (their own published recipient address), even
  though it isn't shown as visible text or a clickable mailto.
- **Facebook:** https://www.facebook.com/bucconevinieolii/ (found via
  independent search).
- **Current website:** enotecabuccone.com. Confirmed dal vivo: a
  genuinely old table-layout HTML site, EXIF data on one photo shows
  "Adobe Photoshop CS" and a 2005 timestamp. Entry page is a bare
  "entra/enter" button pair, navigation uses old-style framesets, one
  page even still has a visitor hit counter. A far more extreme "bad
  website" case than most leads on this repo, not just subjectively
  dated.
- **Sources:** Turismo Roma directory -> the business's own site
  (enotecabuccone.com), fetched directly for the real email, history
  text, logo, and real photos from their "Chi Siamo" page.
- **Status:** outreach-sent (email sent 2026-10-07 to
  info@enotecabuccone.com, Gmail message ID `1a115395e7a3a039`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/buccone/
- **Sold:** no
- **Four other candidates checked and dropped today before this
  one:** Tappezzeria Ferranti (ferranti1928.it does not resolve via
  DNS), Gardino Gioielleria (gardino.it is a bare hosting-provider
  placeholder page, "Welcome to gardino.it... upload a new
  index.html"), Orologeria Bruno Valentino (no owned website, only a
  third-party-directory email, doesn't meet today's standard),
  Bottega del Soldatino (labottegadelsoldatino.it does not resolve).
  Poggi Belle Arti (dal 1825) was also checked and dropped: real site,
  but actively and recently updated (image uploads dated October
  2026), so it doesn't fit this project's "bad/missing website"
  premise.
- **Notes:**
  - **History is real, but corrected from the directory's claim.**
    Turismo Roma's listing says "dal 1870," but the business's own
    "Chi Siamo" text doesn't confirm that date for the wine shop
    itself: "In origine rimessa di Carrozze dei Marchesi Cavalcabò,
    poi Osteria e dal 1969 trasformata in enoteca." So what's actually
    confirmed is: originally a Cavalcabò family carriage house, later
    an osteria, turned into a wine shop in 1969. After Domenico
    Buccone's death in 1980, his wife Maddalena expanded the offering;
    since 1997 sons Vincenzo and Francesco run it, adding a
    restaurant service. This demo uses only what the primary source
    actually says, not the secondary directory's "1870," the same
    discipline already applied for `pianoforti-papi` and others.
  - **Photos: all real, zero stock, from their own "Chi Siamo"
    page.** `hero.jpg` is the real interior, wine-filled shelves and a
    brick archway with dining tables. `about.jpg` is a real photo of
    the owners, Vincenzo and Francesco Buccone, behind the counter.
    `gallery-1.jpg` is a real antique brass cash register, a genuine
    shop heirloom. Other brands' bottles visible on the shelves in the
    background are just normal retail stock for a wine/liquor shop,
    not a design-attribution issue like the jewelry/pen/hat leads
    where the featured product itself carried another brand's name.
  - **Logo: real, pure decorative wordmark, no separable icon.** A
    glowing green GIF reading "enoteca BUCCONE" with small grape-leaf
    and sun motifs worked into some letters, but no standalone icon to
    crop. Per CLAUDE.md, text initials "EB" are used, in the real
    colors sampled pixel-by-pixel from the logo file itself.
  - **Colors:** dark green `#214201` and olive-gold `#9b9b2a`, both
    sampled pixel-by-pixel from the real logo GIF.
  - Mood: **rustic** (a hands-on family business with a concrete,
    down-to-earth history, the wine-shop identity itself dating only
    to 1969 rather than a multi-century documented institution),
    matching the skill's own guidance.
  - No prices published anywhere (wine priced per bottle/label,
    highly variable), left blank in `config.js`.
  - Hours not confirmed in any source checked (the "dove siamo" page
    had no text content), left as "da confermare".
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). 8 of 10 `.reveal` elements reached `.reveal.in-view`
    after a full-page scroll (consistent with prior demos). Gallery
    lightbox opens on click and closes on Escape. Mobile nav toggle
    present and opens the nav (`nav open` class confirmed at 390x844
    viewport).

## Outreach email (sent 2026-10-07)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos really are the business's own,
the email says "le vostre vere foto." The concrete, verifiable hook
is the real, documented history (carriage house to osteria to family
wine shop) deserving a modern site instead of a 2005-era table-layout
page. No price mentioned, no em dashes, plain punctuation, tone warm
but grounded given the practical, family-business character rather
than a multi-century institution.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per
> Enoteca Buccone, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/buccone/
>
> L'ho fatto perché un locale con questa storia, da rimessa di
> carrozze a enoteca di famiglia, merita un sito moderno, non quello
> attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
