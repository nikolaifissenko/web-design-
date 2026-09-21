# pelletteria-bussiglieri

- **Found:** 2026-09-16 (independent web search of the Associazione
  Botteghe Storiche Roma member list, category "Pelletterie", cross-
  checked against the site's own listing since the association page
  gives no addresses)
- **Address:** Via della Conciliazione, 43, 00193 Roma (steps from
  Basilica di San Pietro)
- **Phone:** 06 6880 2590. No mobile/WhatsApp number found anywhere,
  left blank in `config.js` rather than guessed.
- **Email:** pelletteriabussiglieri@gmail.com, found directly on their
  own site's Contatti section (footer of every page). Not a directory
  guess.
- **Social:** Instagram instagram.com/pelletteriabussiglieri and
  Facebook facebook.com/Pelletteria-Bussiglieri-1507572736207076,
  both confirmed via a link on their own site, not just searched for
  independently. Real contact-channel check done before building, per
  the standing rule (not just "no website").
- **Current website:** pelletteriabussiglieri.it. WordPress 5.0.27 (a
  2018 release, matches the footer's "Copyright... 2019", never
  updated since). Confirmed genuinely broken, not just dated: the
  Tatsu page-builder shortcodes render as raw unparsed text on both
  the home page and "Chi siamo" (visible `[tatsu_section ...]` syntax
  mixed into the copy), and the site returns HTTP 503 intermittently
  (hit once during this session before a retry succeeded).
- **Sources:** Associazione Botteghe Storiche Roma member directory ->
  the business's own site (pelletteriabussiglieri.it), fetched directly
  (with a browser User-Agent + Referer, since a bare `curl` got a 503
  first) for real history text, real photos, and real CSS colors.
- **Status:** outreach-sent (email sent 2026-09-16 to
  pelletteriabussiglieri@gmail.com, Gmail message ID `1a0a9e25a5bc57e3`)
- **Response:** no reply yet. Follow-up sent 2026-09-21 (Gmail message ID `1a0c2cda1ea42971`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/pelletteria-bussiglieri/
- **Sold:** no
- **Notes:**
  - A family-run leather goods shop on Via della Conciliazione, one of
    the most prestigious tourist addresses in Rome (the boulevard
    leading straight to St. Peter's Square). In the family since 1920,
    now in its fourth generation (Bussiglieri Ilaria & C. sas). Sells
    handmade, Made in Italy leather goods: bags, belts, small leather
    goods, fine hides (deer, nappa, crocodile, lizard) with vegetable
    dyes, alongside a few known accessory brands (Gianfranco Corti, My
    Walit, Tru Virtu, Mario Valentino). Summarized honestly from their
    own "Chi siamo" page, not invented.
  - **Photos, all real, all from their own site, zero stock.**
    `hero.jpg` is the real shopfront at dusk, lit up, with the "Leather
    Shop" signage and real handbags visible in the window displays.
    `about.jpg` is the real wooden sales counter with a brass
    "Pelletteria Bussiglieri" nameplate, and two framed real vintage
    photos of Via della Conciliazione inset into the counter itself.
    `gallery-1.jpg` and `gallery-2.jpg` are two real interior shots:
    glass display cases full of real handbags actually for sale, one
    under a small chandelier. `gallery-3.jpg` is a real product photo
    of leather belts they sell. `gallery-4.jpg` is a real, unwatermarked
    black-and-white period photo of Via della Conciliazione looking
    toward St. Peter's, hosted directly on their own site: not a photo
    of the shop itself, used honestly here to represent the street's
    own history, not claimed as a shop interior. One other vintage-
    style photo candidate found in a general web search was discarded:
    it carried a visible "Raccolta Roma Sparita" archive watermark,
    copyrighted material, not reusable.
  - **Logo: no real standalone logo exists anywhere** (no logo/favicon
    file referenced anywhere in their site's HTML, only the brass
    counter nameplate baked into a photo, not an isolatable mark), so
    a clean circular "B" monogram was designed for the template's
    avatar slot rather than falling back to plain initials, per the
    standing rule to adapt/design before defaulting to text. Colors are
    real, not invented: leather brown sampled pixel-by-pixel from the
    real belts in `gallery-3.jpg`, and gold `#af9f66` copied directly
    from their own site's CSS (the literal background color of their
    social icons).
  - **Colors:** primary `#5b3a24` (sampled leather brown), accent
    `#af9f66` (their own real CSS gold, not invented).
  - Mood: **boutique** (spacious, restrained, ghost-outline buttons).
    A curated multi-brand retailer in a prime tourist address, not a
    solo-craftsman workshop, so boutique fits better than editorial,
    same reasoning as `paganini-tessuti`.
  - No prices published anywhere on their site, left blank in
    `config.js`, same as most artisan/retail leads on this repo.
  - **Hours: not confirmed anywhere** (checked their own site and 3
    directory listings, none list opening hours), left the schedule
    empty rather than guessed. The "Orari" section still shows since
    the Google Maps embed is set.
  - Smoke-tested with Playwright: no real console errors (the only
    console error is a `net::ERR_CERT_AUTHORITY_INVALID` on the Google
    Fonts CSS request, the known sandbox restriction, not a site bug).
    All 13 `.reveal` elements correctly gain `.in-view` on scroll.
    Gallery lightbox opens on click. Mobile nav toggle opens/closes
    correctly at 390px width.

## Outreach email (sent 2026-09-16)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the page-builder
markup literally showing as broken text on their live site, paired
with the genuinely rare thing worth showing off: 100+ years on one of
Rome's most prestigious streets. No price mentioned, no em dashes,
plain punctuation, follows the current `pitch_template.md` structure
(link right after the greeting). Sent per Nikolai's explicit "write
and send" request, shown in the conversation before sending, per the
standing autonomous-send rule.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito di
> Pelletteria Bussiglieri, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/pelletteria-bussiglieri/
>
> L'ho fatto perché il vostro sito attuale ha alcuni problemi tecnici
> piuttosto evidenti (parti di codice che compaiono come testo invece
> di essere visualizzate correttamente, e ogni tanto va in errore), e
> per una bottega che è su Via della Conciliazione dal 1920, a due
> passi da San Pietro, mi sembrava un peccato non avere una vetrina
> online all'altezza di una storia così lunga.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
