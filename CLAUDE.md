# Working on this repo

This is a lead-gen tool: free demo sites for real Rome businesses, used to
land paying clients. Every demo is a sample of Nikolai's actual design
work. Treat it that way, not as a placeholder exercise.

## Writing style: no em dashes, anywhere

Outreach emails/scripts, `_lead.md` notes, commit messages, README
prose. None of it should use the em dash character ("—"). Restructure
into two sentences, or use a comma or colon instead. This applies
everywhere, not just outreach copy, and it's a standing rule, not a
one-off request: don't wait to be asked again on the next client.
Outreach text specifically also needs to read like it was actually
typed by Nikolai, not generated. Plain punctuation is part of that, not
just a style preference.

## Outreach: writing and sending

- **When Nikolai says to work autonomously, that includes sending.**
  (His instruction, 2026-09-03.) The "show the draft before sending"
  rule below is for a normal session where he's present to review. When
  he explicitly asks for autonomous work, finish the loop yourself:
  build the demo, draft the email following the rules below (no price,
  no invented personal connection, tone matched to the business), and
  send it, don't stop and wait for a go-ahead that defeats the point of
  "autonomous." Still show what was sent afterward, and never invent a
  personal connection or a price regardless of how autonomous the
  session is, those rules don't bend.
- **No price in the email itself.** The going rate can come up once
  there's a real conversation; leading with "500€" in a cold message
  reads like a sales pitch, not a real designer reaching out.
- **Tone matches the business's actual stature.** A casual "I'm a
  student practicing" framing undersells a 100+ year institution. For
  businesses with real, documented history, write with the warmth and
  respect that history earns, while staying modern (not stiff, not
  archaic). For smaller/newer businesses the lighter practicing-designer
  framing still fits fine.
- **A genuine personal connection, only if it's real.** If Nikolai has
  actually visited a business or bought something there, that's worth
  opening with, and it lands far better than a generic compliment. Never
  invent this: ask Nikolai directly which businesses he actually knows
  and what he actually got, and only include it for the ones he
  confirms. A false "I've been to your shop and bought X" is easy for
  the recipient to catch and would undermine the whole honest,
  low-pressure angle this project depends on.
- **Show the full draft in the conversation before sending anything**,
  written out as normal prose, not a bulleted/dashed summary. Nikolai
  reviews the actual words that would be sent, not a paraphrase of
  them. (Exception: an explicit "work autonomously" instruction, see
  above, still show the sent text afterward, just don't wait on it.)
- **Only send what there's an actual channel for.** Claude can send
  email (Gmail) directly once a draft is approved. Claude cannot send
  Instagram DMs, Facebook Messenger messages, WhatsApp messages, or make
  phone calls. For those channels, the draft goes in `_lead.md` and
  Nikolai sends it himself. Don't report a lead as "contacted" unless a
  message actually went out on a channel Claude can use, or Nikolai
  confirms he sent it elsewhere.

## A lead needs a real contact channel before it's considered done

"No website" is not enough to call a business a finished lead. Before
treating a candidate as ready (built or not), actually search for its
Instagram and Facebook by name, not just whether it has a site. Phone
only is the last resort, not the default, the same way stock photos are
the last resort for images.

This rule already existed in `README.md` ("Lead-finding approach that
actually worked": web search, then check the site, then check for a
public email or Instagram/Facebook handle before building) before this
note was added. It just wasn't followed for two Round 9 leads (Boccione
and Antico Forno del Ghetto were built and reported as phone-only
without that check actually having been done), and it lived only in
README's narrative "what worked" section rather than as a rule surfaced
here. It's stated plainly in both places now. Follow it every time a
lead is sourced; don't rediscover it after the fact.

## Act like a professional web designer, not a form-filler

A professional doesn't drop a client's branding because the source file is
inconvenient to work with. If a real logo doesn't cleanly fit the template's
circular avatar slot (wide wordmark, icon and text overlapping with no clean
crop line), **do not just skip it and fall back to text initials.** Adapt it:
redesign a clean icon-only mark using the business's real colors and the
spirit of their real mark (see `scripts/branding-extraction.md` for how;
this was gotten wrong once already on this repo before being corrected).
Falling back to initials is the last resort, not the first one, and it
needs a real reason ("no logo exists anywhere," not "the real one was
annoying to crop").

## Real photos are the default, stock is the last resort

Before using a stock photo for any client, exhaust the real options:
- The business's own current site (even a bad/dead one may have real
  interior/product photos worth extracting; see `branding-extraction.md`).
- Press coverage and food/business blogs (RomaToday, local news sites,
  "flawless.life"-style features): search `"<business name>" <neighborhood>
  foto`. These often carry real, professionally-shot, EXIF-verifiable
  photos of the exact place.
- Review/listing aggregators with real customer photos: piatti.menu,
  Tripadvisor (`LocationPhotoDirectLink` pages), Yelp. These are usually
  genuine phone-camera shots of the actual food/room, not stock. Check
  for a watermark to crop, not for whether the photo is staged-agency-style.
- Instagram and Facebook profiles themselves are **confirmed unreachable
  by automated fetch**: both are client-rendered apps with no static
  photo URLs in the raw HTML (not just blocked by a WAF; there is
  genuinely nothing to scrape). Don't keep retrying this path. The
  working alternative is asking Nikolai for a screenshot to crop from by
  hand, or finding the same real photos re-hosted on one of the sources
  above.

Only after actually checking those sources, not just the business's own
site, does a generic Unsplash pick become acceptable, and only for
whichever image slots still have nothing real. Say explicitly, in both
`config.js` (comment) and `_lead.md`, which images are real vs. stock and
where the real ones came from. "I used stock" is not an acceptable answer
if the real-photo sources above were never actually checked.

## Visual quality bar: "wow effect," not plain-template

Real branding is necessary but not sufficient. The site itself has to
read as professional, modern work, not an unstyled template with a photo
dropped in. Scroll-reveal animation, a working gallery lightbox, hover/
focus micro-interactions, an animated mobile nav, and `prefers-reduced-
motion` support are the standing bar for every demo, applied via the
shared `template/`. **See the `professional-web-design` skill
(`.claude/skills/professional-web-design/SKILL.md`) before touching
`template/` or claiming a demo is "done"**: it has the full checklist,
the mood system (which aesthetic fits which kind of business, and why
that has to match the business's actual heritage, not just "old"), and
the safe process for rolling a template-wide change out to all live
clients without silently destroying per-client customizations (custom
titles, fonts, color tweaks) the way a blind file-copy will.

## See also

- `.claude/skills/professional-web-design/SKILL.md`: the visual/motion
  quality standard, the mood system, and the safe template-rollout process.
- `scripts/branding-extraction.md`: the detailed how-to for fetching around
  bot-blocks, cropping baked-in captions, when a logo needs full redesign
  vs. a straight crop.
- `README.md`: overall project status and workflow.
