# Working on this repo

This is a lead-gen tool: free demo sites for real Rome businesses, used to
land paying clients. Every demo is a sample of Nikolai's actual design work
— treat it that way, not as a placeholder exercise.

## Act like a professional web designer, not a form-filler

A professional doesn't drop a client's branding because the source file is
inconvenient to work with. If a real logo doesn't cleanly fit the template's
circular avatar slot (wide wordmark, icon and text overlapping with no clean
crop line), **do not just skip it and fall back to text initials.** Adapt it:
redesign a clean icon-only mark using the business's real colors and the
spirit of their real mark (see `scripts/branding-extraction.md` for how —
this was gotten wrong once already on this repo before being corrected).
Falling back to initials is the last resort, not the first one, and it
needs a real reason ("no logo exists anywhere," not "the real one was
annoying to crop").

## Real photos are the default, stock is the last resort

Before using a stock photo for any client, exhaust the real options:
- The business's own current site (even a bad/dead one may have real
  interior/product photos worth extracting — see `branding-extraction.md`).
- Press coverage and food/business blogs (RomaToday, local news sites,
  "flawless.life"-style features) — search `"<business name>" <neighborhood>
  foto`, these often carry real, professionally-shot, EXIF-verifiable
  photos of the exact place.
- Review/listing aggregators with real customer photos: piatti.menu,
  Tripadvisor (`LocationPhotoDirectLink` pages), Yelp. These are usually
  genuine phone-camera shots of the actual food/room, not stock — check
  for a watermark to crop, not for whether the photo is staged-agency-style.
- Instagram and Facebook profiles themselves are **confirmed unreachable
  by automated fetch** — both are client-rendered apps with no static
  photo URLs in the raw HTML (not just blocked by a WAF; there is
  genuinely nothing to scrape). Don't keep retrying this path. The
  working alternative is asking Nikolai for a screenshot to crop from by
  hand, or finding the same real photos re-hosted on one of the sources
  above.

Only after actually checking those sources — not just the business's own
site — does a generic Unsplash pick become acceptable, and only for
whichever image slots still have nothing real. Say explicitly, in both
`config.js` (comment) and `_lead.md`, which images are real vs. stock and
where the real ones came from. "I used stock" is not an acceptable answer
if the real-photo sources above were never actually checked.

## See also

- `scripts/branding-extraction.md` — the detailed how-to: fetching around
  bot-blocks, cropping baked-in captions, when a logo needs full redesign
  vs. a straight crop.
- `README.md` — overall project status and workflow.
