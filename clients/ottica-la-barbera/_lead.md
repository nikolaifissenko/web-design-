# ottica-la-barbera

- **Found:** 2026-09-24 (independent web search, "ottico storico Roma
  bottega famiglia dal 19 email contatti sito")
- **Address:** Via Cassia 925, 00189 Roma (zona Cassia/Tomba di Nerone)
- **Phone:** 06 6992 4939. Mobile/WhatsApp 339 878 4325.
- **Email:** info@otticalabarbera1837.it, found directly on their own
  site's Contatti page (otticalabarbera1837.it/contatti), confirmed via
  curl (HTTP 200, mailto tag present), not just a directory listing.
- **IMPORTANT address-disambiguation note (read before any follow-up):**
  there are TWO separate current entities/locations both trading under
  the historic "Ottica F. La Barbera 1837" name:
  1. **Via Cassia 925** (this lead): site otticalabarbera1837.it, email
     info@otticalabarbera1837.it / carolapiccioli@gmail.com, phone
     06 6992 4939. This is the one used here, confirmed first-party.
  2. **Via Barberini 74** (a different location, NOT this lead): site
     otticalabarbera.eu (returns 403 to automated fetch), email
     otticaf.labarbera1837@gmail.com, phone 06 483628, cross-confirmed
     by two independent press/directory sources (blogabr.it and
     1000lenti.it) but not directly fetchable from their own site.
  Real, verified photos of the actual shop (storefront with "dal 1837"
  signage, wood-cabinet interior, product wall) exist for location #2
  (found via blogabr.it, an independent feature article on Botteghe
  Storiche Romane), but were **deliberately NOT used here** since they
  belong to a different address than the one being contacted, to avoid
  the exact misattribution risk CLAUDE.md warns about (same category as
  the earlier `ristorante-panzirone` Piazza Navona 72-vs-73 case). If
  this lead is ever revisited, do not merge the two addresses/photos.
- **Facebook:** exists (at least one page, possibly for location #2),
  not used here since it's unclear which page (if any) belongs to the
  Via Cassia location specifically; left blank in `config.js` rather
  than guess. No Instagram found for Via Cassia in any search.
- **Current website:** otticalabarbera1837.it. Confirmed dal vivo via
  curl: a Duda/Italiaonline site-builder site. Has a real, high-quality
  logo (see below) but the body-page photos are 100% generic stock
  (a model holding glasses in front of a wall display, a stock photo of
  a child with an eye chart), zero real photos of this specific shop.
- **Sources:** independent web search -> the business's own site
  (otticalabarbera1837.it), fetched directly for the real email, the
  real logo, and to confirm the site's own photos are stock -> press
  search for real shop photos (found real photos, but for the OTHER
  address, discarded per the note above) -> Facebook/Instagram checked,
  not usable/found for this specific location.
- **Status:** outreach-sent (email sent 2026-09-24 to
  info@otticalabarbera1837.it, Gmail message ID `1a0d24874ff8d056`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/ottica-la-barbera/
- **Sold:** no
- **Notes:**
  - **History is real, summarized honestly, not invented.** Founded in
    Naples in 1837, once official supplier to the Royal House. Family
    business continuing the same optical tradition (eye exams, internal
    lens lab, made-to-order eyewear). Kept deliberately general (not
    repeating the Via Barberini-specific "70 years in Rome" detail from
    the press article, since that detail belongs to the other address).
  - **Logo: real, used with a precise crop, no redesign needed.** Found
    directly on their own site: a gold-on-dark circular "LB" monogram
    next to an "Ottica La Barbera 1837" script wordmark. Cropped to just
    the circular monogram (a clean, already-circular mark), which drops
    straight into the template's circular avatar slot with no editing.
  - **Photos: honest, well-documented stock, not real photos of this
    shop.** Real photos were genuinely found during sourcing, but for a
    *different* address trading under the same historic name (see the
    disambiguation note above), so they were not used here to avoid
    misattributing a different shop's storefront/interior to this one.
    For the Via Cassia location itself, no real photos exist in any
    source checked (own site is stock-only, no dedicated press
    coverage, Instagram not found, Facebook not confirmed for this
    address). Given that, honest stock was used, screened individually
    for third-party brand contamination: `hero.jpg` is a warm-lit wall
    of eyeglasses on display (Unsplash, photo 1544177586-c9b9fb1f45c2).
    `about.jpg` is metal eyeglass frames on a display rack (Unsplash,
    photo 1615468822882-4828d2602857). `gallery-1.jpg` is a row of
    colorful frames on display (Unsplash, photo
    1486250944723-86bca2b15b06). All confirmed free under the standard
    Unsplash License. **One candidate photo was explicitly discarded**:
    a display of frames with visible "JINS" branding and RMB price tags
    (a Chinese eyewear chain), exactly the third-party-logo
    contamination case CLAUDE.md warns about.
  - **Colors:** gold `#966f34`, sampled pixel-by-pixel from the real
    logo (average of two points on the gold circle), and dark navy
    `#1e2a38`, chosen as an elegant contrast accent for the historic-
    institution tone, not sampled since the logo itself is monochrome
    gold/white.
  - Mood: **editorial** (heritage business with a strong, documented
    founding story: 1837, once supplier to the Royal House), matching
    the skill's own guidance.
  - No prices published anywhere (eyewear/exams priced individually),
    left blank in `config.js`.
  - Hours confirmed directly from their own site (Mon-Sat 09:30-13:00,
    15:30-19:30, closed Sunday).
  - Smoke-tested with Playwright: no console errors beyond the known
    sandbox restriction (Google Fonts/Maps blocked network-side, not a
    real bug). 10 elements reached `.reveal.in-view` on scroll. Gallery
    lightbox opens on click. Mobile nav toggle present and opens the
    nav (`nav open` class confirmed at 390x844 viewport).

## Outreach email (sent 2026-09-24)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the real logo/real
history against the site's own 100% stock photography, kept general
about the history (not the Via Barberini-specific detail) since that
belongs to a different address. No price mentioned, no em dashes, plain
punctuation, tone warm and respectful given the genuine ~190-year,
Royal House-supplier history.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per Ottica
> La Barbera 1837:
>
> https://nikolaifissenko.github.io/web-design-/clients/ottica-la-barbera/
>
> L'ho fatto perché mi sembrava un peccato che una storia così lunga,
> quasi due secoli, un tempo fornitrice della Real Casa, fosse
> raccontata online con le stesse foto generiche che si trovano su
> tanti altri siti di ottici.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
