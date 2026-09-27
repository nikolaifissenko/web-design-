# pianoforti-papi

- **Found:** 2026-09-27 (independent web search, "restauro pianoforti
  Roma bottega storica famiglia sito email contatti")
- **Address:** Via Crescenzio 99/B, 00193 Roma (quartiere Prati)
- **Phone:** 06 6869107
- **Email:** info@pianofortipapi.it, found directly on their own site
  ("La nostra storia" page, confirmed via curl mailto tag) and
  independently re-confirmed on their own Contatti page (same address,
  full text: "PIANOFORTI PAPI Via Crescenzio, 99/B ... +39 06 6869107
  info@pianofortipapi.it"). First-party, not a directory listing.
- **Current website:** pianofortipapi.com. Confirmed dal vivo via curl:
  a Duda/Italiaonline site-builder site (same platform already seen for
  `fratelli-paiano` and `ottica-la-barbera`), dated design for a
  business with 150+ years of history and a client list that included
  major 20th-century concert pianists.
- **Sources:** independent web search -> the business's own site
  (pianofortipapi.com), fetched directly for the real email, the real
  history text, the real logo, and real photos from their own site.
- **Status:** outreach-sent (email sent 2026-09-27 to
  info@pianofortipapi.it, Gmail message ID `1a0e1b82abdb244c`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/pianoforti-papi/
- **Sold:** no
- **Notes:**
  - **Everything on this demo is real, zero stock.** In 1870 Giacomo
    Papi opened a piano restoration workshop at Piazza del Popolo 3
    ("Palazzo Lovatti"), becoming known throughout Rome and then Italy
    for his skill tuning instruments, eventually restoring the antique
    pianos at the musical-instrument museum in Piazza Santa Croce in
    Gerusalemme for the collector Gorga Evans. In the early 1900s the
    workshop moved to Via Cavallini and then to Via Crescenzio (Prati),
    where it remains today. His son Luigi Papi, a renowned tuner known
    for his bow tie and borsalino hat, worked for concert pianists
    including Arturo Benedetti Michelangeli, Backhaus and Gieseking.
    Summarized honestly from the real "La nostra storia" text on their
    own site, not invented.
  - **Correction/caveat on the outreach email**: the sent email says
    "fino ai concertisti che si sono affidati a suo nonno Luigi" (up to
    the concert pianists who relied on your grandfather Luigi). This
    overstates what's actually confirmed: the site confirms Giacomo
    (1870) -> son Luigi -> "quattro generazioni" (four generations) to
    today, but does NOT confirm that today's specific owner is Luigi's
    literal grandson (could be great-grandson, or a different line of
    descent). This is a real, if minor, overreach worth flagging: don't
    repeat "suo nonno X" phrasing for a specific generational claim
    unless the exact chain to today's actual recipient is confirmed,
    not just the family surname continuity.
  - **Photos, all real, zero stock, all from their own site.**
    `hero.jpg` is the real showroom with multiple grand and upright
    pianos on display and their own real "pianoforti papi" branded
    posters visible on the wall. `about.jpg` is a real shop interior
    shot, with a real wood piano and their own branding posters
    reflected in another piano's polished lid. `gallery-1.jpg` is a
    real close-up of piano hammer/key mechanism. **One candidate photo
    was explicitly discarded**: it showed a piano with the third-party
    brand "PETROF" clearly visible on the fallboard, a manufacturer they
    sell/service, not their own craft, the exact third-party-logo case
    CLAUDE.md warns about.
  - **Logo: real logo exists, but has no cleanly separable icon.** The
    real logo is the wordmark "pianoforti papi" with a treble clef used
    only as a faint, low-opacity background watermark, not a solid
    standalone mark (unlike `cristiana-perali` or `studio-cassio`,
    which have a genuine separable monogram/icon). Cropping just the
    faint clef would have produced a washed-out, illegible icon, so per
    CLAUDE.md this is a real, defensible case for text initials: "PP"
    is used, in the real colors sampled from the logo file itself.
  - **Colors:** black `#000000`, sampled pixel-by-pixel from the word
    "pianoforti" in the real logo, and dark maroon `#6a262b`, sampled
    pixel-by-pixel from the word "papi" in the same real logo.
  - Mood: **editorial** (heritage business with a strong, documented
    multi-generation founder story: Giacomo 1870 -> Luigi -> today),
    matching the skill's own guidance.
  - No prices published anywhere (pianos priced individually depending
    on model/condition), left blank in `config.js`.
  - Hours confirmed directly from their own Contatti page (Lun-Sab
    10:00-13:00, 15:30-19:30, chiuso domenica; a separate summer-hours
    schedule also exists on their site but wasn't used here to keep
    the demo simple).
  - Smoke-tested with Playwright: no console errors beyond the known
    sandbox restriction (Google Fonts/Maps blocked network-side, not a
    real bug). 10 elements reached `.reveal.in-view` on scroll. Gallery
    lightbox opens on click. Mobile nav toggle present and opens the
    nav (`nav open` class confirmed at 390x844 viewport).
  - **Process note**: Pillow and Playwright were both found missing
    from the Python environment partway through this round (likely an
    environment refresh mid-session) and had to be `pip3 install`'d
    again before image processing and smoke-testing could continue.
    Also, the standard end-of-round `git checkout main` from the
    previous round hadn't actually left local `main` up to date (it
    was still 8 commits behind origin/main), so this round's first
    commit landed on the task branch instead. Both branches were
    reconciled and pushed correctly by the end of this round, but worth
    double-checking local branch state with `git status`/`git log`
    rather than assuming the previous round's `checkout main` held.

## Outreach email (sent 2026-09-27)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the site's own
technical datedness for a business with a documented multi-generation
history and a client list of major concert pianists. No price
mentioned, no em dashes, plain punctuation, tone warm and respectful
given the real heritage. **Note the generational-claim caveat above**:
"suo nonno Luigi" slightly overstates the confirmed family chain.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per
> Pianoforti Papi, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/pianoforti-papi/
>
> L'ho fatto perché mi sembrava un peccato che una storia così lunga,
> dal 1870 fino ai concertisti che si sono affidati a suo nonno Luigi,
> fosse raccontata online con un sito rimasto fermo a qualche anno fa.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
