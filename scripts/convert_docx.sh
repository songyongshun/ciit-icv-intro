#!/usr/bin/env bash
set -u
cd "$(dirname "$0")/.."
IN_DIR="input/智能网联汽车概论 课件/工单试题答案"
OUT_DIR="output/_raw/docx"
mkdir -p "$OUT_DIR"
: > "$OUT_DIR/convert.err"
find "$IN_DIR" -name '任务*.docx' -print0 | while IFS= read -r -d '' f; do
  b=$(basename "$f" .docx)
  echo "Converting: $f"
  pandoc "$f" -t gfm --wrap=none -o "$OUT_DIR/$b.md" 2>>"$OUT_DIR/convert.err"
  echo "  -> $OUT_DIR/$b.md"
done
echo "=== Total converted ==="
ls "$OUT_DIR" | grep -c '\.md$'
echo "=== Errors ==="
cat "$OUT_DIR/convert.err"