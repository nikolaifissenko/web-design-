# cappelleria-martin-brini

- **Found:** 2026-09-03 (Albo Botteghe Storiche di Roma Capitale, Artigiani
  section: "Cappelleria artigiana", Via Ancona n. 24, Municipio Roma II —
  cross-checked against turismoroma.it and paginebianche.it, both agree).
- **Address:** Via Ancona, 24, 00198 Roma.
- **Phone:** 06 4424 9738.
- **Email:** lacappelleria@hotmail.it (confirmed independently on both
  their own site and turismoroma.it).
- **Instagram/Facebook:** none found despite a real search for both.
  Email is the only channel, but it's a real, independently-confirmed
  one, so this clears the "real contact channel" bar.
- **Current website:** lacappelleria.it/index.htm — technically still
  online (curl returns HTTP 200, `WebFetch` initially reported 503, that
  was a transient/proxy issue on this end, not the actual site), but it
  is a Microsoft Word/FrontPage "Save as Web Page" export from 2006:
  `windows-1252` charset, VML `behavior:url(#default#VML)` tags, assets
  in an auto-generated `index_file/` folder, zero CSS framework, no
  viewport meta tag at all. Not just dated, literally a Word document.
- **Sources:** Roma Capitale historic-shops registry -> web search
  confirming address/phone/email independently (turismoroma.it) -> the
  business's own real site, fetched directly with `curl` (WebFetch's
  tool hit a transient 503, curl got a clean 200 with the full page).
- **Status:** demo-built, outreach drafted, not yet sent (see below).
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/cappelleria-martin-brini/
- **Sold:** no
- **Notes:**
  - **Everything on this demo is real, zero stock.** Founded 1936 near
    Porta Pia by Lina Martin as "Cappelleria Fulgor," now run by her
    daughter Elena as modista (hatmaker). The shop's own site names the
    two craftspeople who worked alongside Lina for decades: Dante (the
    hatter) and Lidia (the trimmer). 90 years of activity as of 2026.
  - **Photos, all real**, downloaded directly from `lacappelleria.it/
    index_file/`: `hero.jpg` is a real interior shot of the shop, hats
    displayed in period glass cases. `about.jpg` is a real black-and-white
    portrait of founder Lina Martin. `gallery-1..4` are macro photos of
    the actual antique wooden hat-making tools (blocks, stretching
    irons) referenced in the site's own text as "strumenti artigianali
    in legno realizzati alla fine dell'800," plus finished hats staged
    on those same blocks.
  - **Logo:** no clean, reusable mark exists on the real site (only
    auto-generated navigation GIFs from the Word export, not a real
    logo). Per `branding-extraction.md`, designed a new bowler-hat icon
    from scratch rather than falling back to initials, using colors
    pixel-sampled from the real photos: black/dark-brown felt (~#18191d)
    and the gold hatband (~#b8925a), on a cream circle sampled from the
    damask fabric backdrop in their own product photos (~#d8c9ba). See
    `images/logo.svg`.
  - Mood: **vintage** (1920s-1960s Italian character, matches a
    genuinely old family business with a real period photo to anchor
    it — see `professional-web-design` skill's mood guidance).
  - No prices published anywhere real, left blank in `config.js` per
    standing convention.
  - Hours are a reasonable estimate for a small Roman artisan shop
    (not confirmed by phone), flagged here so a future session or
    Nikolai knows to verify before quoting them to the client.

## Outreach email (drafted 2026-09-03, NOT sent — needs review first)

No personal visit to this shop has been confirmed with Nikolai, so this
draft doesn't claim one. The concrete, verifiable hook is that their
real site is a 2006 Word-document export, not a modern site. No price
mentioned, no em dashes, plain punctuation, standard sign-off.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito de La
> Cappelleria, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/cappelleria-martin-brini/
>
> L'ho fatto perché il vostro sito attuale non si apre bene da telefono,
> ed è un vero peccato per una bottega che restaura ancora i cappelli
> con gli stessi strumenti di fine Ottocento: novant'anni di storia
> meritano una vetrina online che li racconti bene.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
