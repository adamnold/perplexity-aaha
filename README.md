# Perplexity for Linux — AAHA

Unofficial Perplexity Electron desktop app for Fedora KDE, with a stable Wayland taskbar icon.

## Privacy notice

This app uses Electron, which is Chromium-based. It disables unnecessary Chromium background services and adds no AAHA telemetry, but Perplexity, its CDNs, identity providers, connectors, and selected external sources still receive required traffic. Safeguards cannot make Chromium completely Google-free or independently auditable. See PRIVACY.md.

## Install from source

Run chmod +x on the shell scripts, then ./build.sh and ./install.sh. The app installs under ~/MyApps/perplexity-aaha/app. Normal uninstall preserves ~/.config/Perplexity; ./uninstall.sh --purge removes that local profile.

AAHA_NETWORK_AUDIT=1 prints first-seen hostnames. External citations open in the system browser. File upload, drag-and-drop, and downloads remain available.

This project is unofficial and is not affiliated with Perplexity.
