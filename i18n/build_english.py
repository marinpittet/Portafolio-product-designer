"""Generate static English pages from the Spanish source and reviewed translations."""

from html import escape, unescape
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
translations = {}
for line_number, line in enumerate((ROOT / 'i18n/en.tsv').read_text(encoding='utf-8').splitlines(), 1):
    if not line or line.startswith('#'):
        continue
    source, separator, target = line.partition('\t')
    if not separator:
        raise ValueError(f'en.tsv:{line_number}: missing tab')
    if source in translations:
        raise ValueError(f'en.tsv:{line_number}: duplicate source: {source}')
    translations[source] = target

used = set()
untranslated = set()

def translate(source):
    if source in translations:
        used.add(source)
        return translations[source]
    if re.search(r'[ÁÉÍÓÚáéíóúñ¿¡]', source.replace('Andrés Marín', '')):
        untranslated.add(source)
    return source

def translate_text(match):
    text = match.group(1)
    stripped = text.strip()
    if not stripped:
        return match.group(0)
    translated = translate(unescape(stripped))
    left = text[:len(text) - len(text.lstrip())]
    right = text[len(text.rstrip()):]
    return '>' + left + escape(translated, quote=False) + right + '<'

def translate_attribute(match):
    return match.group(1) + '="' + escape(translate(unescape(match.group(2))), quote=True) + '"'

for source_name, target_name in [('index.html', 'index.en.html'),
                                 ('caso-tef/index.html', 'caso-tef/index.en.html')]:
    html = (ROOT / source_name).read_text(encoding='utf-8')
    html = re.sub(r'>([^<>]+)<', translate_text, html)
    html = re.sub(r'\b(alt|aria-label|content)="([^"]+)"', translate_attribute, html)
    html = html.replace('<html lang="es">', '<html lang="en">')
    html = html.replace('aria-current="page">ES</a><a href="./index.en.html" lang="en" data-language-link>EN',
                        '>ES</a><a href="./index.en.html" lang="en" aria-current="page">EN')
    html = html.replace('<a href="./index.html" lang="es" >', '<a href="./index.html" lang="es" data-language-link>')
    if source_name == 'index.html':
        html = html.replace('href="./caso-tef/"', 'href="./caso-tef/index.en.html"')
    else:
        html = html.replace('href="../#/"', 'href="../index.en.html#/"')
    (ROOT / target_name).write_text(html, encoding='utf-8')

if untranslated:
    raise ValueError('Untranslated Spanish text:\n' + '\n'.join(sorted(untranslated)))
print(f'Generated English pages using {len(used)} translations.')
