---
name: professional-web-design
description: Standard for shipping every demo on this repo at professional, "wow-effect" visual quality rather than plain-template quality — the motion/interaction checklist to apply, and the safe way to roll a template-wide upgrade out across all live client sites without destroying per-client customizations. Use whenever building a new client demo, touching template/, or the user asks to make a site "better," "more professional," "modern," or "wow."
---

# Professional web design — modus operandi

Every demo built here is a sample of Nikolai's actual design work, used to
land paying clients (see root `CLAUDE.md`). A demo that looks like an
unstyled template costs the sale before the pitch even lands. This skill is
the standard for visual/interaction quality, and the safe process for
applying it repo-wide.

## The quality bar

A finished client demo should never read as "form filled into a template."
Concretely, every demo needs:

1. **Motion that earns its place, not decoration for its own sake.**
   Scroll-reveal on section content (fade + slide up, staggered on grid
   items via a `--i` custom property, not hardcoded nth-child lists), a
   subtle Ken Burns drift on the hero background, staggered entrance on the
   hero heading/subheading/CTA. Nothing spins, bounces, or calls attention
   to itself — it should read as "polished," not "animated."
2. **A working gallery lightbox.** Real customer/product photos are the
   centerpiece of these sites (per `scripts/branding-extraction.md`) — they
   deserve a click-to-enlarge view with keyboard (Esc/arrows) and
   prev/next controls, not a static grid.
3. **Interaction feedback everywhere a user can act**: card hover lift +
   shadow, button hover lift + color-matched glow (`color-mix()` against
   the client's own `--primary`, never a hardcoded shade), nav underline
   sweep, active-section highlighting in the nav as the user scrolls,
   social icon hover lift.
4. **A header and mobile nav that feel considered**: header gains shadow/
   shrinks slightly on scroll; mobile nav slides open with a height/opacity
   transition, never an instant `display:none` swap; the hamburger icon
   rotates on open.
5. **Accessibility is part of "professional," not optional**: every
   animation/transition must be neutralized under
   `@media (prefers-reduced-motion: reduce)` (a blanket
   `*, *::before, *::after { animation-duration:.01ms!important;
   transition-duration:.01ms!important; }` plus forcing `.reveal` visible
   is the simplest correct approach), visible `:focus-visible` outlines,
   real `alt` text, keyboard-operable lightbox.
6. **Language consistency.** The audience is Italian Rome businesses and
   their customers (`<html lang="it">`). Nav labels and any other chrome
   text default to Italian (Chi siamo / Menu / Galleria / Orari / Contatti)
   unless a specific client's config calls for something else — don't leave
   English placeholder text live on a page aimed at an Italian audience.

These live in the shared `template/` (`css/style.css`, `js/main.js`,
`index.html`) and apply to every client uniformly — this is a template-wide
concern, not something to reinvent per client.

## Rolling a template change out to all live clients — the safe process

`clients/<slug>/{css/style.css,js/main.js,index.html}` are supposed to be
literal copies of `template/`, but in practice individual clients accumulate
real, valuable customizations on top: a hand-written `<title>`/meta
description for SEO, a second Google Font import for a client-specific
heading font, a tweaked `--bg`/`--bg-alt` CSS variable to match a brand's
warm/cool tone. **A blind `cp template/x clients/*/x` silently destroys all
of that.** This happened once already (2026-08-27) — 6 clients lost custom
titles/meta, 4 lost a secondary font import, 2 lost custom background
tints — caught only by diffing before/after against git history.

Do it in this order:

1. Make the change in `template/` first. Test it there (see below) before
   touching any client.
2. Before copying anything, diff each client's current file against the
   **old** `template/` version (`git show HEAD:template/css/style.css`,
   etc.) to find what's already customized per-client. Anything that
   differs from the old template is a candidate for being real, deliberate
   client customization — not template drift to overwrite blindly.
3. Copy the new template files into every client.
4. Re-diff: for every difference found in step 2, confirm the same
   customization still exists after the copy (same value, reapplied on top
   of the new file). Restore anything the copy clobbered via a targeted
   `Edit`, not a full revert — you want the new template features *and*
   the old customization together.
5. Only once every client's diff is accounted for (matches the "found in
   step 2" list exactly, nothing more, nothing less) is it safe to commit.

## Testing before it ships

Playwright is preinstalled in this environment
(`PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`, `executable_path=
"/opt/pw-browsers/chromium"`; `pip install playwright` if the Python
package isn't present yet — the browser binary itself needs no download).
Before pushing a template-wide change, load at least one real client demo
via `file://` and verify, headlessly:

- No `pageerror`/console errors (a Google Fonts `net::ERR_CONNECTION_RESET`
  from the sandboxed `file://` test is expected and not a real bug — real
  errors are anything else).
- Scroll-reveal actually fires (`.reveal` elements gain `.in-view` on
  scroll into view).
- The gallery lightbox opens on click, next/prev navigates, Escape and
  backdrop-click close it.
- The mobile nav (narrow viewport) opens/closes on toggle.
- Active-nav-link highlighting updates as the page scrolls between
  sections.

Screenshot a couple of clients with genuinely different branding (a
photo-real one, a custom-font one) and actually look at them — the
mechanical checks above catch breakage, not whether it looks good.

## Shipping it

GitHub Pages serves `main` only. A change committed to a feature branch and
never merged is invisible to anyone clicking a live demo link or an
already-sent outreach email — this has caused a real incident before (see
`README.md`, "Incident (2026-08-26)"). After verifying locally: commit,
push the working branch, fast-forward/merge into `main`, push `main`, then
confirm at least one live `nikolaifissenko.github.io/web-design-/clients/
<slug>/...` URL actually serves the new content (GitHub Pages deploys take
roughly 1–2 minutes — poll for it, don't assume).

## See also

- Root `CLAUDE.md` — the underlying principle (real branding over
  shortcuts) that this skill's visual-quality bar extends into motion/UX.
- `scripts/branding-extraction.md` — how to source real photos/logos/colors
  per client, which is what all this polish is built to showcase.
- `README.md` — deployment incident history and current per-client status.
