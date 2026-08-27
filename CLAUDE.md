# Working on this repo

This is a lead-gen tool: free demo sites for real Rome businesses, used to
land paying clients. Every demo is a sample of Nikolai's actual design work
— treat it that way, not as a placeholder exercise.

## Writing style: no em dashes, anywhere

Outreach emails/scripts, `_lead.md` notes, commit messages, README
prose — none of it should use the em dash ("—"). Restructure into two
sentences, or use a comma/colon, instead. This applies everywhere, not
just outreach copy, and it's a standing rule, not a one-off request:
don't wait to be asked again on the next client. Outreach text
specifically also needs to read like it was actually typed by Nikolai,
not generated — plain punctuation is part of that, not just a style
preference.

## A lead needs a real contact channel before it's considered done

"No website" is not enough to call a business a finished lead. Before
treating a candidate as ready (built or not), actually search for its
Instagram and Facebook by name, not just whether it has a site. Phone
only is the last resort, not the default, the same way stock photos are
the last resort for images. This has been gotten wrong twice: once by
skipping the Instagram/Facebook search for two businesses that turned
out to have real accounts (found on a second pass, see
`clients/pasticceria-boccione/_lead.md` and
`clients/antico-forno-del-ghetto/_lead.md`), and again by not writing
this rule down the first time it was asked for. Both failures are the
same shape: a real instruction that didn't get saved anywhere, so it
had to be re-litigated. Don't let that happen a third time, on this
rule or the next one.

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

## Visual quality bar: "wow effect," not plain-template

Real branding is necessary but not sufficient — the site itself has to
read as professional, modern work, not an unstyled template with a photo
dropped in. Scroll-reveal animation, a working gallery lightbox, hover/
focus micro-interactions, an animated mobile nav, and `prefers-reduced-
motion` support are the standing bar for every demo, applied via the
shared `template/`. **See the `professional-web-design` skill
(`.claude/skills/professional-web-design/SKILL.md`) before touching
`template/` or claiming a demo is "done"** — it has the full checklist
and, critically, the safe process for rolling a template-wide change out
to all live clients without silently destroying per-client customizations
(custom titles, fonts, color tweaks) the way a blind file-copy will.

## See also

- `.claude/skills/professional-web-design/SKILL.md` — the visual/motion
  quality standard and the safe template-rollout process.
- `scripts/branding-extraction.md` — the detailed how-to: fetching around
  bot-blocks, cropping baked-in captions, when a logo needs full redesign
  vs. a straight crop.
- `README.md` — overall project status and workflow.
