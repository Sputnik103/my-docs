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

## Publishing

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
