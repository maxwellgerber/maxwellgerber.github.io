#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../public/slides"
mkdir -p "$OUT_DIR"

npx --yes @marp-team/marp-cli@^4.3.1 "$SCRIPT_DIR/ciba-vs-dtr-may-2026/ciba-vs-dtr-may-2026.md" \
  -o "$OUT_DIR/ciba-vs-dtr-may-2026.html" \
  --allow-local-files \
  --config-file "$SCRIPT_DIR/marp.config.cjs"
