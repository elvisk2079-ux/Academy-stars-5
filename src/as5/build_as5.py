"""Build the Academy Stars 5 site into the repo root.
Run from src/:  python3 as5/build_as5.py"""
import html, os, subprocess, sys

SRC = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
SITE = os.path.join(SRC, "..")
os.makedirs(os.path.join(SRC, "out"), exist_ok=True)
e = html.escape
HEAD = '<!doctype html>\n<html lang="ru">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
CSS = open(os.path.join(SRC, "engine", "style.css")).read()
BACK = '<p class="wrap back"><a href="index.html">← Academy Stars 5: все уроки</a></p>'

# unit label, output file, pack name, title, subtitle (for the hub list)
TOPICS = [
    ("Unit 2 · Read a diary entry", "diary-text", "u2-diary-text", "Daniel's Diary — Text Words",
     "writing, diary, ice, inside, blanket, stay, believe, terrible, missed, used to, forgot, want, tonight"),
    ("Unit 2 · Read a diary entry", "diary-box", "u2-diary-box", "Daniel's Diary — Box Words",
     "atlas, borrow, cassette player, diary, encyclopaedia, freezing, hot water bottle, office, phone box, remember"),
]

def add_back(page):
    return page.replace('<header class="hero wrap">', BACK.replace('class="wrap back"', 'class="wrap back" style="margin:18px auto 0;font-size:15px"') + '\n<header class="hero wrap">', 1)

def build_packs():
    for _, fn, pack, *_ in TOPICS:
        out = os.path.join(SRC, "out", pack + ".html")
        subprocess.run([sys.executable, os.path.join(SRC, "engine", "build.py"), os.path.join(SRC, "packs", pack + ".js"), out], check=True, cwd=SRC)
        open(os.path.join(SITE, fn + ".html"), "w").write(HEAD + add_back(open(out).read()))

def hub():
    body, cur = "", None
    for i, (unit, fn, _, t, s) in enumerate(TOPICS, 1):
        if unit != cur:
            if cur: body += "</ol></section>"
            body += f'<section class="unit"><h2>{e(unit)}</h2><ol class="toc">'
            cur = unit
        body += (f'<li><a class="row" href="{fn}.html"><span class="n">{i}</span>'
                 f'<span class="t"><b>{e(t)}</b><span class="s">{e(s)}</span></span><span class="go" aria-hidden="true">→</span></a></li>')
    body += "</ol></section>"
    page = f'''<title>Academy Stars 5</title>
{CSS}
.unit {{ padding-top: 22px; }}
.unit h2 {{ margin-bottom: 8px; }}
.toc {{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }}
.row {{ display: grid; grid-template-columns: 2.2em minmax(0,1fr) 1.2em; align-items: center; gap: 12px; padding: 12px 14px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--ink); }}
.row:hover {{ border-color: var(--accent); }}
.row:focus-visible {{ outline: 2px solid var(--accent); outline-offset: 2px; }}
.n {{ font-family: var(--font-mono); font-size: 13px; color: var(--accent); }}
.t {{ display: flex; flex-direction: column; min-width: 0; }}
.t b {{ font-weight: 600; }}
.s {{ font-size: 14px; color: var(--muted); }}
.go {{ color: var(--muted); }}
.how {{ background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 16px 18px; margin-top: 30px; }}
.how h3 {{ margin: 0 0 8px; font-size: 17px; }}
.how ol {{ margin: 0; padding-left: 1.3em; display: flex; flex-direction: column; gap: 4px; }}
</style>
<header class="hero wrap">
  <p class="eyebrow">Чемоданчик учителя английского · 5 класс</p>
  <h1>Academy Stars 5</h1>
  <p class="sub">Интерактивные тренажёры по лексике учебника Academy Stars 5: карточки и несколько тренировок на каждое слово.</p>
</header>
<main class="wrap" style="padding-block: 0 64px;">
  {body}
  <div class="how">
    <h3>Как заниматься</h3>
    <ol>
      <li>Сначала посмотри карточки и послушай слова (🔊).</li>
      <li>Пройди все тренировки по порядку. Ошибка не страшна: попробуй ещё раз.</li>
      <li>Следи за доской вверху: все точки зелёные — слово выучено, красная рамка — повтори.</li>
      <li>Через 2–3 дня нажми «Start again»: вопросы каждый раз перемешиваются.</li>
    </ol>
  </div>
</main>
'''
    open(os.path.join(SITE, "index.html"), "w").write(HEAD + page)

if __name__ == "__main__":
    build_packs(); hub()
    print(sorted(os.listdir(SITE)))
