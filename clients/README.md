# Clients

One folder per business, each a clone of `../template/`. Naming convention:
`clients/<business-slug>/` (lowercase, hyphenated, e.g. `clients/trattoria-da-marco/`).

Don't create these by hand — use the helper script from the repo root:

```
./scripts/new_client.sh trattoria-da-marco
```

This copies `template/` into `clients/trattoria-da-marco/` and drops in a
`_lead.md` tracking file. From there:

1. Edit `clients/trattoria-da-marco/js/config.js` with real business info.
2. Add real photos to `clients/trattoria-da-marco/images/`.
3. Deploy (see `../scripts/deploy.md`) and record the live URL + status in
   `_lead.md`.

Each client folder is fully self-contained (its own copy of the CSS/JS), so
editing one client's site never touches another's or the shared template.
