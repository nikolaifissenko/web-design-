# tanto-pe-magna

- **Found:** 2026-08-25
- **Address:** Via Giustino de Jacobis, 9/15, Garbatella, 00154 Roma
- **Phone:** 06 5160 7422 (landline — no WhatsApp field set, unconfirmed if mobile-enabled)
- **Current website:** tantopemagna.it — **domain is dead**, does not resolve (verified via DNS/curl). Worse than never having had one: anyone who finds the old listed URL gets nothing.
- **Facebook:** https://www.facebook.com/146635089389434 ("Tanto Pè Magnà A Garbatella," page created 2018)
- **Instagram:** https://www.instagram.com/tanto.pe.magna/ (handle found 2026-08-26 via web search — 396 followers, 18 posts, matches this business; logo was already sourced from this profile by Nikolai earlier, handle just wasn't recorded until now)
- **Sources:** PagineBianche/PagineGialle (address, phone, hours), RomaToday/Groupon/Luciano Pignataro Wine Blog (family-run, traditional Roman dishes, low prices).
- **Status:** demo-live
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/tanto-pe-magna/
- **Sold:** no
- **Notes:**
  - No email found — outreach by phone or Facebook.
  - Sunday hours not explicitly confirmed (source only gave "Lunedì/Sabato"); assumed closed Sunday, a common pattern for a Roman trattoria — confirm before finalizing.
  - Dish prices not published anywhere — left blank in `js/config.js`, confirm in person.
  - **2026-08-26: all photos replaced with real ones — no stock left.** Instagram itself is unreachable by automated fetch (confirmed again — client-rendered SPA, no static photo URLs at all, not just blocked) and the real handle was never recorded here (only the logo, sourced by Nikolai from a screenshot). A first pass found one real photo (RomaToday's article, now `about.jpg`) and left the rest as stock — on review that wasn't good enough, so went back and found real photos for every remaining slot instead of settling for generic Unsplash:
    - `hero.jpg` — real exterior of the trattoria (visible "TRATTORIA" signage, outdoor tables), from piatti.menu's listing photos.
    - `gallery-1.jpg` / `gallery-2.jpg` — real customer-submitted dish photos (cacio e pepe/gricia; fried polpette on salad) from piatti.menu, tiny platform watermarks cropped off.
    - `gallery-3.jpg` — a table shot with the restaurant's own branded paper placemat ("TANTO PE MAGNA") clearly visible — about as unambiguous a "real photo of this place" as it gets.
    - All sourced from piatti.menu's public listing for this restaurant (`piatti.menu/restaurants/roma-3/tanto-pe-magna-3`), not Instagram.
  - **Aesthetic refreshed twice** (per Nikolai, 2026-08-25): first pass switched off the generic template palette to a warmer terracotta/dark-brown scheme with a Fraunces serif heading font. Then Nikolai found their real Instagram logo (black hand-lettered brush script "TANTO PE MAGNA" in a white circular stamp, "GARBATELLA" / "TRATTORIA ROMANA" in small caps) — switched to match: true black/white (`#161616` / `#2b2b2b`), logo saved as `images/logo.jpg`, and a Permanent Marker heading font to echo the brush lettering. Note: this sandbox's test browser can't fetch Google Fonts (network-restricted), so the font choice is verified in code/config only — confirm it renders as expected once viewing the live URL on a normal connection.

## Outreach draft — personal story angle

Same approach as the other 5 leads — leads with Nikolai's real story instead of a sales pitch.

> Ciao! Mi chiamo Nikolai. Di recente ho scoperto una vera passione per il web design — è una cosa nuova per me, ma ci sto mettendo il cuore perché spero un giorno di riuscire a farne il mio lavoro e lasciare il mio impiego attuale.
>
> Per fare pratica, ho scelto alcune attività di Roma che mi piacciono e ho costruito loro un sito gratis, solo per il gusto di farlo e imparare. Ho visto che il sito di Tanto pè Magnà non è più raggiungibile, così ve ne ho preparato uno nuovo per farvi vedere come potrebbe venire online: https://nikolaifissenko.github.io/web-design-/clients/tanto-pe-magna/
>
> Non c'è nessun obbligo, l'ho fatto principalmente per esercitarmi. Ma se vi piace il risultato e volete tenerlo, sarei felicissimo di completarlo con le foto vere del locale e portarlo online per voi (500€, con hosting e social media disponibili come opzione mensile se interessa). Anche solo un parere sincero mi farebbe piacere!
>
> Grazie mille,
> Nikolai

Send via Instagram DM to @tanto.pe.magna (now confirmed — this is likely the best channel, matches the pattern of the other trattorie), or Facebook Messenger to the page, or call 06 5160 7422 and follow up with a message so they have the link to click.

## Outreach draft — email version (no address confirmed yet)

Ready to use if an email turns up (calling and asking, a business registry, etc).

Subject: Un sito rifatto per Tanto pè Magnà (giusto per farvi vedere)

> Buongiorno,
>
> Mi chiamo Nikolai. Di recente ho scoperto una vera passione per il web design — è una cosa nuova per me, ma ci sto mettendo il cuore perché spero un giorno di riuscire a farne il mio lavoro e lasciare il mio impiego attuale.
>
> Per fare pratica, ho scelto alcune attività di Roma che mi piacciono e ho provato a rifare i loro siti, solo per esercitarmi e imparare. Ho visto che il sito di Tanto pè Magnà non è più raggiungibile, così ve ne ho preparato uno nuovo per farvi vedere come potrebbe venire online: https://nikolaifissenko.github.io/web-design-/clients/tanto-pe-magna/
>
> Non c'è nessun obbligo, l'ho fatto principalmente per esercitarmi. Ma se vi piace il risultato, sarei felicissimo di completarlo con le foto vere del locale e metterlo online per voi (500€, con hosting e social media disponibili come opzione mensile se interessa). Anche solo un parere sincero mi farebbe molto piacere!
>
> Grazie mille per il vostro tempo,
> Nikolai
