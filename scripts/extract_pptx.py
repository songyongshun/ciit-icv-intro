#!/usr/bin/env python3
"""Extract text from a .pptx file using only the standard library.
Reads ppt/slides/slideN.xml in order, outputs text per slide."""
import sys, zipfile, re
import xml.etree.ElementTree as ET

NS = {
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
}

def slide_num(name):
    m = re.search(r'slide(\d+)\.xml$', name)
    return int(m.group(1)) if m else -1

def extract_pptx(path):
    out = []
    with zipfile.ZipFile(path) as z:
        slides = [n for n in z.namelist() if re.match(r'ppt/slides/slide\d+\.xml$', n)]
        slides.sort(key=slide_num)
        for s in slides:
            root = ET.fromstring(z.read(s))
            # gather all <a:p> paragraphs in document order (including inside text boxes)
            paras = []
            for p in root.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}p'):
                runs = []
                for t in p.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}t'):
                    if t.text:
                        runs.append(t.text)
                line = ''.join(runs).strip()
                if line:
                    paras.append(line)
            out.append((slide_num(s), paras))
    return out

if __name__ == '__main__':
    for slide_no, paras in extract_pptx(sys.argv[1]):
        print(f'===== SLIDE {slide_no} =====')
        for line in paras:
            print(line)
