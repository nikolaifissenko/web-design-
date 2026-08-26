# Branding extraction — standard step for every new client

See also `CLAUDE.md` at the repo root for the underlying principle this
document implements: act like a professional web designer, not a
form-filler — adapt real assets to fit rather than discarding them, and
treat stock as a last resort, not a default.

Before falling back to generic stock, always check whether the business
already has real visual assets worth reusing: an existing (even bad) website,
a Google Maps listing, a Facebook page. Real branding makes a demo land
harder — it looks like *their* site, not a template — and it's often sitting
right there for free. This is now a **mandatory step**, not an optional
nice-to-have, in the client workflow (see `README.md` → Workflow, step 4).

## When this applies

- The business has an existing website (bad, dated, or even dead/404 — check
  anyway, since some assets may survive independently of the main domain).
- The business has a public Instagram/Facebook page with a profile photo or
  real interior/product shots.
- Skip this step only if there is genuinely nothing to check (no website, no
  social account found at all) — in that case go straight to stock, as
  documented in `pitch_template.md`/`new_client.sh`'s existing flow.

## What to look for, in priority order

1. **Real brand colors.** Even a bad site usually has an intentional color
   scheme. Pull it from the CSS (`grep -oiE 'color\s*:\s*#[0-9a-fA-F]{3,6}'`
   or open dev tools) rather than inventing a palette from scratch. This is
   the highest-value, lowest-effort win — always do this one.
2. **A real logo — adapt it, don't just skip it.** Check if it's directly
   reusable:
   - The template's logo slot (`business.logoImage`) renders at **40×40,
     circular, `object-fit: cover`**. A logo only works there directly if
     it's roughly square/round to begin with (an icon, a monogram, a
     profile photo). A wide wordmark (text-heavy, rectangular) will crop
     into an unreadable sliver if forced in as-is.
   - **When it doesn't fit directly, redesign an icon-only version instead
     of falling back to text initials.** This was gotten wrong once on this
     repo (Autofficina Pisino's car+text logo was skipped instead of
     adapted) and corrected after feedback — initials are a last resort,
     not the default response to "the source file is awkward." Isolate or
     redraw the graphic element (the icon/mark, not the wordmark) using
     the business's real brand colors, sized for the circular slot. A
     flat, simple silhouette (drawn with PIL `ImageDraw` — polygons,
     ellipses — or hand-authored SVG) beats a forced crop or a generic
     two-letter monogram; see `clients/autofficina-pisino/` for a worked
     example (a redrawn car-silhouette icon using the business's real
     black + mustard-yellow from their actual logo, not invented colors).
   - Also check the logo file isn't actually a bigger graphic with other
     elements baked in (nav links, taglines, copyright text) — dated sites
     sometimes ship a full header image-map as "the logo." Not reusable
     even if square; this is the one case where falling back to
     `logoText` is actually correct (see Trastevereinbed).
3. **Real photos — exhaust real sources before touching stock.** Stock is
   the last resort per image slot, not the default. Check, in order, before
   picking a single Unsplash photo:
   - The business's own current site (interior/product/room photos).
   - Press coverage and local blogs: search `"<business name>" <neighborhood>
     foto`. Dedicated features (e.g. a `flawless.life`-style piece on one
     specific restaurant) often carry real, professionally-shot,
     EXIF-verifiable photos — check image EXIF (`file photo.jpg`) for a
     real camera model as a good sign.
   - Review/listing aggregators with real customer photos: **piatti.menu**
     (`/restaurants/.../company_gallery/<id>/conversions/contribution_gallery.jpg`
     for a larger size than the default thumbnail), **Tripadvisor**
     (`LocationPhotoDirectLink-...` pages, found via web search — these are
     real customer uploads with real captions), Yelp. These are usually
     genuine phone-camera shots of the actual food/room/storefront — the
     signal to check is a watermark to crop, not staged-agency lighting.
   - Instagram/Facebook profiles are a **confirmed dead end for automated
     fetching** — both are client-rendered apps that ship no static photo
     URLs in the raw HTML at all (verified directly: fetching a profile
     page's HTML has zero real `<img>` content, it's all client-side
     rendered). This isn't a bot-block to work around with headers, it's
     genuinely nothing to scrape — don't keep retrying it. Either ask
     Nikolai for a screenshot to crop from, or find the same real photos
     re-hosted on one of the sources above (this consistently works: the
     same customer photos that get posted to Instagram usually also end up
     on Tripadvisor/piatti.menu/Google, which are actually fetchable).

   Only once those are actually checked (not just the business's own site)
   does a stock photo become acceptable for whatever slot still has
   nothing real. Tells a candidate photo is stock, not real (skip it, or
   treat it as no different from your own Unsplash pick — see Autofficina
   Pisino for a case where the business's own chosen photos turned out to
   be stock, and were used anyway per Nikolai's explicit call to match
   their existing visual identity): filename literally contains
   `pexels`/`shutterstock`/`istock`, generic professional-agency
   lighting/staging with no specific identifying detail (no signage, no
   branded items, could be any business in that category), or it's
   suspiciously identical in style to obvious stock elsewhere on the same
   page.
4. **Captions/text baked into images.** Old sites often bake marketing text
   directly into photos (e.g. "Comfort & Relax at Rome" across a room
   photo). Crop it out for a clean, modern look — the new site has its own
   headings for that. (`python3` + `Pillow` — `pip install pillow` if not
   already available — crop with `Image.open(...).crop((left, top, right,
   bottom)).save(...)`.)

## How to fetch, practically

Direct `curl` to a business's own domain sometimes gets blocked by basic
bot-protection even when a browser would load fine — a custom `999` or `403`
response on image assets while the HTML loads is the signature. Fix: set a
real browser `User-Agent` and a `Referer` header pointing at the site itself:

```
curl -sL "<image-url>" -o out.jpg \
  -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36" \
  -H "Referer: https://<their-domain>/"
```

Always `file out.jpg` after downloading to confirm it's actually an image
and not an HTML error page saved with a `.jpg` name (a common failure mode:
the request got blocked and silently saved the block page instead).

For a real Unsplash stock photo when no reusable branding exists at all: the
old `source.unsplash.com` redirect service is dead (503). Instead, find a
specific photo via web search (`unsplash.com/photos/<slug>-<id>`), fetch that
page for its `og:image`/CDN URL (`images.unsplash.com/photo-<hash>?w=1600...`),
and `curl` that directly.

## Documenting it

Whatever you find or don't find, say so explicitly in both `js/config.js`
(a comment at the top) and `_lead.md` (a dated note under **Notes**):
which colors/photos/logo are real vs. stock, where they came from, and why
a logo was or wasn't used as `logoImage`. Future sessions (and Nikolai)
need to be able to tell at a glance what's authentic without re-deriving it.
