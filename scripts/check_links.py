#!/usr/bin/env python3
import re
from pathlib import Path

root = Path('docs')
bad = 0
for md in root.rglob('*.md'):
    if '.vitepress' in str(md):
        continue
    txt = md.read_text(encoding='utf-8')
    for m in re.finditer(r'\]\((\.[^)]+)\)', txt):
        link = m.group(1).split('#')[0]
        if not link:
            continue
        target = (md.parent / link).resolve()
        if not target.exists():
            print('BROKEN:', md, '->', link)
            bad += 1
print('total broken links:', bad)