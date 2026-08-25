# Deploying a client demo

The template has zero build step (plain HTML/CSS/JS), so any static host
works. Two free options that take seconds:

## Cloudflare Pages (recommended — fast, free custom domains later)

1. Install once: `npm install -g wrangler` (or use the dashboard, no CLI needed).
2. From the client folder:
   ```
   cd clients/<slug>
   npx wrangler pages deploy . --project-name=<slug>
   ```
3. Wrangler prints a live `*.pages.dev` URL — that's the demo link to send.

Or via the dashboard: Cloudflare Pages → Create project → Direct Upload →
drag the `clients/<slug>` folder in.

## Vercel

1. Install once: `npm install -g vercel`.
2. From the client folder:
   ```
   cd clients/<slug>
   vercel --prod --yes
   ```
3. Vercel prints the live URL.

Or via the dashboard: New Project → drag-and-drop the `clients/<slug>` folder.

## After deploying

- Save the live URL in that client's `_lead.md`.
- Send the link + a short message (see `pitch_template.md`) to the business.
- If they buy: point a custom domain at the same deployment (Cloudflare Pages
  and Vercel both support this for free), then handle hosting/retainer
  billing separately.
