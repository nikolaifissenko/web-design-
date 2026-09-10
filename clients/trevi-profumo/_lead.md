# trevi-profumo

- **Found:** 2026-09-10 (independent web search, "profumeria storica Roma
  centro", not the historic-shops registry this time)
- **Address:** Zona Fontana di Trevi, 00187 Roma (exact street number not
  published anywhere checked, left as a general zone in `config.js`,
  worth confirming by phone before finalizing a sale)
- **Phone:** 06 678 4200 (also listed as WhatsApp)
- **Email:** info@treviprofumo.com, found directly on their own site,
  displayed prominently at the top of every page. Not a directory guess.
- **Instagram:** https://www.instagram.com/treviprofumo/ (confirmed real,
  found via independent search)
- **Facebook:** https://www.facebook.com/treviprofumoroma/ (confirmed real)
- **Current website:** treviprofumo.com. Two real, verifiable problems:
  (1) almost every image on the homepage is a broken base64 placeholder
  GIF, confirmed via direct fetch of the page source, not just a visual
  glance. (2) The site's TLS configuration is so outdated that it
  actively refuses connections from modern TLS 1.2/1.3 clients (verified
  directly with `curl`: fails with `internal error` on TLS1.2/1.3,
  only connects when forcing `--tlsv1.0`). A real visitor on a modern
  browser may see intermittent connection failures, not just ugly images.
- **Sources:** independent web search -> the business's own site, fetched
  directly (working around the TLS issue with `curl --tlsv1.0`) for real
  contact info, history text, colors, logo, and photos.
- **Status:** outreach-sent (email sent 2026-09-10 to
  info@treviprofumo.com, Gmail message ID PENDING_FILL)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/trevi-profumo/
- **Sold:** no
- **Notes:**
  - **Everything on this demo is real, zero stock.** Founded 1919 near
    the Fontana di Trevi. Completely renovated in 2020, when they pivoted
    to niche/artistic perfumery and launched their own house line,
    "Aqua Trevi," inspired by the Trevi Fountain and Roman Dolce Vita.
    History summarized honestly from their own real "Chi siamo" text
    (found in the raw page source, not visible in the broken-image
    rendered page), not invented.
  - **Photos, all real**, downloaded directly from their own
    `wp-content/uploads` folder (not Instagram, confirmed unreachable by
    automated fetch as always): `hero.jpg` is a real photo of the shop's
    actual interior after the 2020 renovation (wooden domed ceiling, real
    stocked shelves, the "AQUA TREVI" house-brand sign visible on the
    back wall). `about.jpg` is a real bottle of their own Aqua Trevi
    "Rosso di Roma" diffuser, shot outdoors on travertine with a
    fountain-like blurred background. `gallery-1.jpg` is another real
    Aqua Trevi bottle ("è Vita"). `gallery-2.jpg` is a real photo of
    jewelry/bijoux they sell, confirmed genuine by their own site text
    ("Bijoux e Accessori completano... la nostra offerta"), not a random
    stock jewelry shot. `gallery-3.jpg` is a real product box (The House
    of Oud) they carry in-store.
  - **Logo: real, used as-is.** The exact official file
    ("Trevi-Profumo-LOGO-UFFICIALE-1.png") from their own site, a clean
    circular badge that drops straight into the template's circular
    avatar slot with no redesign needed.
  - **Colors: real**, sampled pixel-by-pixel from the real logo file:
    taupe/greige `#a0998e` (inner circle), cream `#c6baa8` (ring text),
    plus the logo's own small green `#15964f` and red `#af0000` accent
    diamonds (a subtle tricolore nod, not invented). Used the red as the
    site accent since it reads better for buttons/CTAs than the taupe.
  - Mood: **boutique** (elegant, editorial feel), matching a niche
    perfumery with real Dolce-Vita-glamour positioning, not just "old."
  - No prices found anywhere for individual products (a boutique
    perfumery, not unusual), left blank in `config.js`.
  - Hours not confirmed anywhere in the sources checked, left as "da
    confermare," worth a phone call to verify before a sale.
  - Smoke-tested with Playwright: no console errors beyond the known
    sandbox restrictions (Google Fonts CSS request, Google Maps embed,
    both blocked network-side in this environment, not a real site bug).
    Gallery lightbox opens and navigates correctly. Mobile nav toggle
    present.

## Outreach email (sent 2026-09-10)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the broken images
and the outdated TLS config (worded simply as "problemi di
connessione," not as a technical lecture). No price mentioned, no em
dashes, plain punctuation, follows the current `pitch_template.md`
structure (link right after the greeting).

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito di Trevi
> Profumo, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/trevi-profumo/
>
> L'ho fatto perché il vostro sito attuale ha quasi tutte le immagini
> rotte e a volte dà problemi di connessione a chi lo visita: per una
> profumeria storica dal 1919, con una collezione propria ispirata
> proprio alla Fontana di Trevi, mi sembrava un peccato non avere una
> vetrina online che funzionasse come merita.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
