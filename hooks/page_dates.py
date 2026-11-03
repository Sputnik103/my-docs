"""Show working-copy timestamps only in local preview, never as published dates."""

from datetime import datetime
from pathlib import Path
import subprocess
from zoneinfo import ZoneInfo

_preview = False


def on_startup(command, dirty):
    global _preview
    _preview = command == "serve"


def on_page_context(context, page, config, nav):
    page.meta.pop("preview_modified_date", None)
    if not _preview:
        return context

    root = Path(config.config_file_path).resolve().parent
    source = Path(page.file.abs_src_path).resolve()
    result = subprocess.run(
        ["git", "-c", f"safe.directory={root.as_posix()}", "-C", str(root),
         "status", "--porcelain", "--untracked-files=normal", "--",
         source.relative_to(root).as_posix()],
        capture_output=True, text=True, check=True,
    )
    if result.stdout.strip():
        page.meta["preview_modified_date"] = datetime.fromtimestamp(
            source.stat().st_mtime, ZoneInfo("Asia/Shanghai")
        ).strftime("%Y-%m-%d %H:%M")
    return context
