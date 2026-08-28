# libreria-tombolini

- **Found:** 2026-08-28 (Municipio I historic-shops registry research)
- **Address:** Via Quattro Novembre, 146, 00187 Roma (rione Trevi)
- **Phone:** 06 6795719
- **Email:** libreria.tombolini@iol.it
- **Facebook:** https://www.facebook.com/profile.php?id=100068245836899
  (found via Turismo Roma's official listing, real, not fetchable for
  photos per CLAUDE.md)
- **Current website:** libreriatombolini.it does not resolve at all
  (DNS failure, confirmed with `curl` on this check, `HTTP 000`). A
  2015 Wayback Machine snapshot exists but `web.archive.org` is blocked
  at the network/proxy level in this environment (`x-block-reason:
  hostname_blocked`), so it could not be checked either.
- **Sources:** Roma Capitale historic-shops registry -> Turismo Roma
  (official listing, address/phone/email/Facebook, no photos) ->
  PDE (publisher distributor)'s "Facce da libreria" feature, 13 July
  2020 (pde.it), the only source anywhere that had an actual photo of
  the shop's interior.
- **Status:** demo-built, outreach drafted below, not yet sent (awaiting
  Nikolai's review, per CLAUDE.md).
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/libreria-tombolini/
  (not live yet, branch not merged to `main`)
- **Sold:** no
- **Notes:**
  - **Real photo sources actually exhausted before touching stock**, per
    CLAUDE.md: own site (dead, DNS failure), Wayback Machine (blocked at
    proxy level, not just "didn't try"), Turismo Roma (listing only, no
    photos), illibraio.it (directory only, base64 placeholder icons, no
    real photos), bibliotechediroma.it and localshop24.com (both
    returned HTTP 403 to automated fetch), maremagnum.com (used-book
    marketplace listing, returned empty), RomaToday's centro-storico
    bookshops feature (only a one-line mention of "Tombolini" in running
    text, no dedicated photo), Instagram/Facebook (client-rendered,
    confirmed dead end per CLAUDE.md). One real source worked: PDE's
    "Facce da libreria" gallery feature, which had one real interior
    photo (dated 13 July 2020, Covid-mask era).
  - **Story**: antiquarian bookshop since 1874, officially recognized as
    a historic shop by Mayor's Ordinance no. 50 of 25 February 1998.
    30,000 titles specializing in humanities: classical and medieval
    antiquity, esotericism, philosophy, Italian literature, art,
    psychology, classical and Romance philology. Hours found via search:
    09:00-19:30, closed Sunday.
  - **Logo:** genuinely no visual mark found anywhere, not even a blurry
    or low-resolution one (unlike the other three leads in this batch,
    where at least an imperfect real mark existed to adapt). Per
    `branding-extraction.md`, this is the one legitimate case where
    falling back to `logoText` ("LT") is the correct call, not a
    shortcut, there is nothing real to adapt.
  - **Colors:** no real CSS/theme exists (site is dead). Approximated
    from the real interior photo's own palette rather than invented at
    random: `#7a2e1f` (aged leather/oxblood, echoing the bound-book
    spines and dark wood visible in the photo) and `#2e2822` (dark
    walnut, sampled from the shelf-shadow tones in the same photo). This
    is an honest approximation, not a precise pixel sample, flagged here
    for a human eyeball check against the real shop if convenient.
  - **Photos:**
    - `about.jpg` and `gallery-1.jpg` are **real**, both cropped from
      the single PDE press photo to exclude the booksellers' faces
      (they were photographed for a different purpose, not posed for
      this use), `about.jpg` shows shelves with a genuine "FILOSOFIA"
      shelf-label and a framed historic-shop certificate, matching the
      shop's real humanities specialization; `gallery-1.jpg` shows more
      leather-bound volumes and a display case.
    - `hero.jpg` and `gallery-2.jpg` are **stock** (Unsplash, free
      license): a general antiquarian-bookshop interior and a stack of
      antique books, used only after the real-source search above came
      up short for a wide hero shot and a second gallery image.
  - Mood: **editorial** (asymmetric, Playfair Display), fits a
    150-year-old scholarly antiquarian bookshop with a strong
    specialist identity.
  - Phone number cross-check: illibraio.it listed a different number
    (06 6785925) than the one used here (06 6795719, matching Turismo
    Roma and the original README research). Worth a quick verification
    call before relying on either if the email bounces.

## Outreach email (drafted, NOT sent, needs Nikolai's review first)

No real personal visit to this shop has been confirmed with Nikolai, so
this draft does not claim one. If Nikolai has actually been here, tell
me and I'll rewrite the opening around that instead. No price mentioned,
no em dashes, plain punctuation, tone matched to a genuinely major
150-year heritage.

> Gentile Libreria Tombolini,
>
> mi chiamo Nikolai, progetto siti web, e vi scrivo perché mi sono
> imbattuto nella vostra storia cercando le librerie storiche di Roma.
> Centocinquant'anni nello stesso mestiere, trentamila titoli di
> filosofia e scienze umane, sono cose che oggi si trovano raramente, e
> mi è sembrato un peccato che una storia così non avesse una vetrina
> online che le rendesse giustizia.
>
> Ho preparato una bozza di sito partendo da quello che ho trovato di
> voi in giro, foto vere comprese. La trovate qui, senza alcun impegno:
> https://nikolaifissenko.github.io/web-design-/clients/libreria-tombolini/
>
> Se vi va di darle un'occhiata e farmi sapere cosa ne pensate, mi
> farebbe piacere. Altrimenti nessun problema.
>
> Un saluto,
> Nikolai
