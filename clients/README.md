# Clients

One folder per business, each a clone of `../template/`. Naming convention:
`clients/<business-slug>/` (lowercase, hyphenated, e.g. `clients/trattoria-da-marco/`).

Don't create these by hand — use the helper script from the repo root:

```
./scripts/new_client.sh trattoria-da-marco
```

This copies `template/` into `clients/trattoria-da-marco/` and drops in a
`_lead.md` tracking file. From there:

1. **Branding pass first** — see `../scripts/branding-extraction.md`. Check
   the business's existing site/socials for a real logo, colors, and photos
   before touching stock. Note what's real vs. stock in both `config.js`
   (comment) and `_lead.md`.
2. Edit `clients/trattoria-da-marco/js/config.js` with real business info
   and whatever real assets step 1 found.
3. Add photos to `clients/trattoria-da-marco/images/` — real ones from
   step 1 where found, stock otherwise.
4. Deploy (see `../scripts/deploy.md`) and record the live URL + status in
   `_lead.md`.

Each client folder is fully self-contained (its own copy of the CSS/JS), so
editing one client's site never touches another's or the shared template.
