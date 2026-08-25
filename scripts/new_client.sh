#!/usr/bin/env bash
# Clone the template into clients/<slug> for a new lead.
#
# Usage: ./new_client.sh business-slug
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATE_DIR="$PROJECT_DIR/template"
CLIENTS_DIR="$PROJECT_DIR/clients"

if [ $# -ne 1 ]; then
  echo "Usage: $0 <business-slug>" >&2
  echo "Example: $0 trattoria-da-marco" >&2
  exit 1
fi

SLUG="$1"
DEST="$CLIENTS_DIR/$SLUG"

if [ -d "$DEST" ]; then
  echo "Error: $DEST already exists." >&2
  exit 1
fi

cp -R "$TEMPLATE_DIR" "$DEST"
rm -f "$DEST/README.md"

cat > "$DEST/_lead.md" <<EOF
# $SLUG

- **Found:** $(date +%Y-%m-%d)
- **Address:**
- **Phone:**
- **Current website:** (none / bad link)
- **Status:** demo-built
- **Demo URL:**
- **Sold:** no
- **Notes:**
EOF

echo "Created $DEST"
echo "Next steps:"
echo "  1. Edit $DEST/js/config.js"
echo "  2. Add photos to $DEST/images/"
echo "  3. Deploy: see $SCRIPT_DIR/deploy.md"
