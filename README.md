# Perplexity for Linux — AAHA

Unofficial Perplexity Electron desktop app for Fedora KDE, with a stable Wayland taskbar icon.

## Privacy notice

This app uses Electron, which is Chromium-based. It disables unnecessary Chromium background services and adds no AAHA telemetry, but Perplexity, its CDNs, identity providers, connectors, and selected external sources still receive required traffic. Safeguards cannot make Chromium completely Google-free or independently auditable. See PRIVACY.md.

## Install from source

Run `./build.sh` and then `./install.sh`. Direct AppImage execution works from
any location and creates no install directory. The optional installer defaults
to `~/.local/opt/aaha/perplexity-aaha`; use
`./install.sh --install-root /absolute/path/perplexity-aaha` to choose another
per-application location. Normal uninstall preserves `~/.config/Perplexity`;
`./uninstall.sh --purge` removes that local profile after receipt and marker
validation.

AAHA_NETWORK_AUDIT=1 prints first-seen hostnames. External citations open in the system browser. File upload, drag-and-drop, and downloads remain available.

This project is unofficial and is not affiliated with Perplexity.
