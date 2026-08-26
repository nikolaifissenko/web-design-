# Branding extraction — standard step for every new client

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
2. **A real logo.** Check if it's actually reusable:
   - The template's logo slot (`business.logoImage`) renders at **40×40,
     circular, `object-fit: cover`**. A logo only works there if it's
     roughly square/round to begin with (an icon, a monogram, a profile
     photo). A wide wordmark (text-heavy, rectangular) will get cropped
     into an unreadable sliver — **do not force it**. Skip `logoImage` and
     keep `logoText` (initials) instead; the color palette still carries
     the brand.
   - Also check the logo file isn't actually a bigger graphic with other
     elements baked in (nav links, taglines, copyright text) — dated sites
     sometimes ship a full header image-map as "the logo." Not reusable
     even if square.
3. **Real photos** (interior, product, food, rooms — whatever fits the
   business). Only worth using if they're genuinely photos *of this
   business*, not stock the business itself licensed. Tells that a photo is
   the business's own: filenames tied to the property/product, appears
   across multiple pages consistently, matches other confirmed details.
   Tells it's stock (skip it, treat as no different from your own Unsplash
   pick): filename literally contains `pexels`/`shutterstock`/`istock`,
   generic professional-agency lighting/staging with no specific
   identifying detail, or it's suspiciously identical in style to obvious
   stock elsewhere on the same page.
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

Instagram and Facebook actively block automated fetching (confirmed
repeatedly) — for those, ask the business owner (or Nikolai, if he already
follows them) to send a screenshot to crop the logo/photo from by hand,
rather than trying to scrape them.

## Documenting it

Whatever you find or don't find, say so explicitly in both `js/config.js`
(a comment at the top) and `_lead.md` (a dated note under **Notes**):
which colors/photos/logo are real vs. stock, where they came from, and why
a logo was or wasn't used as `logoImage`. Future sessions (and Nikolai)
need to be able to tell at a glance what's authentic without re-deriving it.
