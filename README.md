# Perplexity (AAHA)

A native **Perplexity desktop app for Linux**, built with Electron by
**Adam And His Agents (AAHA)**. It wraps the official Perplexity web app
(`https://www.perplexity.ai`) in a clean, standalone window that behaves
like a real desktop application — including a **stable taskbar icon that
KDE Plasma on Wayland will NOT swap for the generic browser icon**.

> **Unofficial / not affiliated with Perplexity AI, Inc.** This is a
> third-party wrapper. It is not endorsed by or affiliated with Perplexity.
> "Perplexity" and the Perplexity logo are trademarks of Perplexity AI,
> Inc. See `NOTICE` for details. Your use of Perplexity remains subject
> to Perplexity's own Terms of Service.

---

## Why this exists

KDE on Wayland picks an app's panel icon from the window's `app_id`
(WM class) and matches it to a `.desktop` file. Chromium-based PWAs all
share Chromium's identity, so KDE falls back to the generic browser icon.

A real Electron app sets its **own** `app_id` (`app.setName()` + `--class`)
and ships a `.desktop` file whose `StartupWMClass` matches exactly. KDE
finds a unique match, so your icon sticks.

---

## Requirements (Fedora / KDE example)

Node.js + npm, plus FUSE for running AppImages:

```bash
sudo dnf install nodejs npm fuse fuse-libs
```

(On Debian/Ubuntu: `sudo apt install nodejs npm libfuse2`.)

---

## Build & install

From the project folder:

```bash
chmod +x *.sh          # one time, make scripts executable
./build.sh             # installs deps, builds dist/ (first run downloads Electron, ~150MB)
./install.sh           # registers icon + .desktop with your desktop environment
```

Then open your app launcher, search "Perplexity", launch it, and pin it
to your taskbar/panel. The icon stays.

Build outputs:
- `dist/linux-unpacked/` — the native unpacked app (what `install.sh` wires up)
- `dist/*.AppImage` — a portable single-file version

To remove it later: `./uninstall.sh`

---

## Configuration (`app.config.js`)

| Field                   | Value                                            |
|-------------------------|--------------------------------------------------|
| `url`                   | `https://www.perplexity.ai`                      |
| `name`                  | `Perplexity`                                     |
| `wmClass`               | `Perplexity`                                     |
| `appId`                 | `com.adamandhisagents.perplexity`                |
| `allowedHosts`          | `["perplexity.ai", "pplx.ai"]`                   |
| `disableHardening`      | `false` (privacy hardening ON)                   |

> `build.sh` syncs `app.config.js` and `icons/icon.png` into `src/`
> before building so they get packed into the app bundle (`app.asar`).

---

## Privacy hardening (on by default)

This app launches with Chromium background/phone-home subsystems disabled:
`disable-background-networking`, `disable-domain-reliability`,
`disable-component-update`, `disable-features=NetworkTimeServiceQuerying,
Translate,OptimizationHints,MediaRouter`, and `disable-breakpad`. The app
should only talk to Perplexity. To opt out, set `disableHardening: true` in
`app.config.js`.

Verify with:

```bash
sudo tcpdump -n -i any 'port 53 or port 443' | grep -Ei 'google|gstatic|gvt|1e100'
```

Note: if the wrapped site itself loads Google Fonts/reCAPTCHA/Analytics,
that is the site's own traffic and would occur in any browser too.

---

## Notes / gotchas

- **Disk:** each app bundles its own Electron runtime (~150–250 MB).
- **Single instance:** clicking the icon focuses the existing window.
- **No menu bar:** the app launches chrome-less. Remove
  `Menu.setApplicationMenu(null)` in `src/main.js` if you want one.
- **Session data** lives in `~/.config/Perplexity/`, NOT in the project
  folder. Your login is never committed to git or shipped in the AppImage.
- **Updates:** the bundled Electron does not auto-update. To refresh:
  `npm install electron@latest --save-dev` then rebuild.

---

## License

Copyright 2026 **Adam And His Agents (AAHA)**.

The wrapper/launcher code in this repository is licensed under the
**Apache License, Version 2.0** — see `LICENSE`. This license applies only
to the code authored here; it does not cover Perplexity, Perplexity's
software/service, or Perplexity's trademarks and logos. See `NOTICE`.
