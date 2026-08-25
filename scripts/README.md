# Scripts

| Script | Purpose |
|--------|---------|
| `find_leads.py` | Search Google Places for local businesses missing a website (or worth checking). Appends to `leads.csv`. Requires a free Google Places API key — see `.env.example`. |
| `new_client.sh` | Clone `../template/` into `../clients/<slug>/` with a `_lead.md` tracker. |
| `deploy.md` | How to push a client folder live on Cloudflare Pages or Vercel (no build step, drag-and-drop or one CLI command). |
| `pitch_template.md` | Outreach message to send once a demo is live. |

## Typical workflow

```
# 1. Find leads
pip install -r requirements.txt
cp .env.example .env   # add your Google Places API key
python find_leads.py "trattoria" --area "Trastevere, Roma"

# 2. Review leads.csv, pick one worth a demo

# 3. Scaffold their site
./new_client.sh trattoria-da-marco

# 4. Customize clients/trattoria-da-marco/js/config.js + images/

# 5. Deploy (see deploy.md) and send the pitch (see pitch_template.md)
```

`leads.csv` and `.env` are gitignored (leads are a working list, not code;
the API key is a secret) — see the repo's `.gitignore`.
