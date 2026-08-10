# Portfolio — static build

Plain HTML/CSS/JS. No build step, no dependencies, no framework. Works on GitHub Pages as-is,
and also opens straight from disk — double-click `index.html`, no server needed.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The site. Renders everything from `content.js`. |
| `studio.html` | Visual content editor. Add/edit/reorder projects without touching HTML. |
| `content.js` | **All your copy lives here** — every string in English and German. The only file you normally edit. |
| `css/organic.css` | Design system: colours, type, components. Don't edit unless changing the look. |
| `assets/` | Images, PDFs, the cut-out portrait. |

## Deploying to vedantchavan004.github.io

Copy these files into the repo root, replacing the old site:

1. Replace `index.html`.
2. Add `studio.html`, `content.js`, `css/organic.css`.
3. Merge `assets/` (only `portrait-cutout.png` is new; the rest are already yours).
4. Delete the old `style.css` and `script.js` — nothing references them now.
5. Commit and push. Pages rebuilds in about a minute.

## Adding a project

Open `studio.html` (double-click it locally, or visit `/studio.html` once deployed).

1. Pick **Projects** → **+ Add**.
2. Fill in title, outcome, tags, image path. Tick *featured* to put it in the top three.
3. **Save preview** to see it in the site tab immediately.
4. **Download content.js** and commit that one file to publish it.

Studio has no backend — it can't write to the repo. Editing is instant; publishing is one commit.

## Language

Every field has an EN and a DE column. If DE is empty, the site shows the English text — so a
half-translated site never breaks. The toggle sits in the header and remembers the choice.

## Theme

Dark by default, with a toggle. Both themes are token overrides in `index.html`'s `<style>` block:
the neutral and accent ramps reverse, so every component flips without per-element rules.

## Slideshows

Any project or experience entry with an `images` array renders as a slideshow — arrows on hover,
dots, a counter and a per-image caption. One image shows as a plain still. Add or remove images in
Studio (Projects / Experience → Images).

## Known gaps

- Both CV buttons point at `assets/Resume.pdf`. Add a German `Lebenslauf.pdf` and update the path in
  Studio → Profile → CV downloads.
- The contact form opens the visitor's mail client (`mailto:`). For real inbox delivery, swap it for
  Formspree or similar — one form action change, no other edits.
