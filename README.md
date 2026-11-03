# Personal website

Source for https://zhangzhou.site/, built with MkDocs and Material for MkDocs.

## Local preview (Windows)

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
```

Open http://127.0.0.1:8000/. To check the complete build:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build
```

## Paper page

`docs/articles/paper/paper_emoji.md` (Articles → Paper → EMNLP 2024) links to
arXiv:2409.14552 and summarizes the v2 paper's graph construction, pre-training,
downstream tasks and limitations. Selected results identify the backbone and
report absolute weighted-F1 differences. Preview at
http://127.0.0.1:8000/articles/paper/paper_emoji/ before publishing.

Button styles in `docs/assets/extra.css` reset inherited paragraph indentation
and center their labels. The editorial theme gives primary buttons an olive
background and white text.

The paper page includes original local `all_task.png`, copied
unchanged into `docs/articles/paper/assets/emoji/`. The figure has a caption, alt text,
responsive width, a white background for transparent pixels and GLightbox zoom.
A note distinguishes the original diagram's edge-level contrastive label from
the final paper's link-reconstruction objective. No private drafts are bundled.

## Editorial theme

`docs/assets/journal.css` layers a warm ivory / olive editorial design over the
existing Material navigation, search, article lists, tables, code and metadata.
Headings use Georgia / Noto Serif SC with system fallbacks. Existing article
content and URLs remain intact. The encrypted anniversary HTML is independent
of the MkDocs theme and is not restyled.

The homepage uses `overrides/journal-home.html`, selected in `docs/index.md`.
Travel photographs are referenced from existing article assets. Its scoped
styles do not apply to article layouts. `docs/assets/journal.js` supplies an
Asia/Shanghai clock, a Monday-first month calendar with navigation and reset,
and the existing non-autoplay NetEase embed with a direct-link fallback.
The homepage music widget has an ivory record-sleeve skin; expanding its native
details control reveals the official player in grayscale. The outer skin cannot
style or control the cross-origin iframe internally; playback remains user-driven
inside NetEase's controls. No decorative play button claims to start audio.
The site logo is a typographic Z. monogram; the former animated-logo script
and obsolete polyfill dependency are no longer loaded. The three independent
design studies remain outside the repository in `../homepage-previews/`.

Changes are for local review until explicitly published.

Validation: full MkDocs build; browser checks of homepage, paper, blog and tags;
390px homepage and paper without horizontal overflow; live clock, calendar
next/reset and mobile navigation exercised. Browser script errors checked.

## Publishing workflow

Page creation and published update dates use the file's first and latest Git
commits in Asia/Shanghai time. Full history is required (`fetch-depth: 0` in CI).
Git failures stop the build instead of silently displaying today's build date.
A file with a single commit can legitimately have identical dates. In local
`mkdocs serve` only, `hooks/page_dates.py` displays the modification time of an
uncommitted page with a local-preview label; normal builds retain commit dates.

Push to `main` to run the `publish site` GitHub Actions workflow, which builds
the site and publishes to `gh-pages`. GitHub Pages must serve that branch's root.
Check Actions and the live site after publishing. The workflow can also be run
manually; pull requests do not publish the site.

## Music

The home page (song `1433983480`) and Japan travel article (playlist
`8676853852`) use NetEase's official HTTPS iframe player with autoplay disabled
and a direct music-page link. These no longer require APlayer, MetingJS or its
third-party parsing API. Playback still depends on NetEase availability,
licensing, region and browser restrictions. The music article retains the old
MetingJS examples as historical notes. For music you own or have permission to
host, a local audio file with an HTML `<audio controls>` player is another option.

## Anniversary photo wall

`docs/anniversary/index.html` is the encrypted release. Private editable sources
are outside this repository in `../anniversary-source/` and must never be committed.
The photo wall accepts JPEG, PNG, WebP, HEIC and HEIF (15 MB per input and converted
image, up to 20 per batch). HEIC/HEIF converts locally to JPEG before the existing
AES-GCM browser storage and encrypted backup flow. Existing backups remain compatible.
Native browser decoding is tried first; bundled heic-to 1.6.7 loads only when needed,
without sending photos to a remote service. Its files and license are in
`docs/anniversary/vendor/`. Unsupported HEIF variants may fail conversion; retain
originals. Conversion saves a still JPEG, not Live Photo animation.

To rebuild, run private `build-encrypted.py` with the existing password, then copy
`encrypted-output/index.html` and `encrypted-output/vendor/` into `docs/anniversary/`.
Keep private sources, original assets and backups out of Git.

Validation: MkDocs build passed; headless Edge unlocked the encrypted release,
converted a libheif HEIC sample, saved/read the encrypted photo and recovered it
after reload. iPhone Safari has not been tested on a physical device.

Uploaded photos have a Rename action (1-80 Unicode characters after trimming).
Names are encrypted with the image, persist across reloads and travel with photo
backups. Renaming preserves the photo ID and original ordering, including older
photos. Built-in photos retain their curated captions.
