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
