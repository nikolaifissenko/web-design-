# Template

Single-page, mobile-first business website. No build step — open
`index.html` directly or deploy the folder as-is.

## Customizing a new client site

99% of customization happens in **`js/config.js`**. Everything on the page —
text, colors, menu/services, gallery, hours, contact info, map, socials — is
read from that one object.

1. Copy this whole `template/` folder to `clients/<business-slug>/`
   (or use `scripts/new_client.sh <business-slug>`).
2. Open `js/config.js` and fill in the business's real info.
3. Drop real photos into `images/` (hero, about, gallery-1/2/3, logo if any)
   matching the filenames referenced in `config.js`, or point to your own
   filenames.
4. Get a Google Maps embed: Google Maps → Share → Embed a map → copy the
   `src="..."` URL into `map.embedSrc`.
5. Open `index.html` in a browser to check it, then deploy
   (see `scripts/deploy.md`).

Leave any `config.js` field empty (`""` or `[]`) and that section/item
hides itself automatically — e.g. no `map.embedSrc` means no map shown.

## Structure

- `index.html` — page skeleton (rarely needs editing)
- `css/style.css` — styling, uses CSS variables for `--primary`/`--accent`
  set from `config.js`
- `js/config.js` — **all business content lives here**
- `js/main.js` — renders `config.js` into the page (rarely needs editing)
- `images/` — photos referenced by `config.js`
