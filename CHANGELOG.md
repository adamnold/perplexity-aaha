# Changelog

Last Updated: 2026-09-24

## Unreleased — 2026-09-24

- Added a manual-only Release workflow that builds the AppImage from the
  draft release's target commit, attaches it with `SHA256SUMS`, and publishes
  the draft. CI validation builds remain non-publishing.

## v1.3.0 — 2026-09-24

- Updated from exact Electron 43.1.0 to exact Electron 44.4.5 (Chromium
  security fixes); no application source, security policy, or profile changes
  were needed for the Electron 44 breaking changes.
- Refreshed the locked build tooling to clear every `npm audit` finding,
  including the `brace-expansion`, `tar`, `undici`, and `js-yaml` advisories
  that had begun failing the required CI audit step on `master`.
- Supersedes the unmerged Copilot Electron 44.3.0 draft.

## v1.2.0 — 2026-07-23

- Reconciled documentation dates and corrected the bundled icon source path.
- Restored the regular Perplexity description on the hidden compatibility
  launcher while preserving its stable KDE panel identity and hidden status.
- Made validation builds explicitly non-publishing, added regression coverage,
  and upgraded the GitHub Actions runtimes used by CI.
- Updated the locked build dependency tree to use the patched `fast-uri` 3.1.4
  release.

## v1.1.1 — 2026-07-15

- Corrected the privacy document after a clean-profile hostname audit showed that Perplexity loads Google sign-in and several third-party service resources during initial startup.
- Changed the optional installer default to `~/.local/opt/aaha/perplexity-aaha`
  and added explicit `--install-root` support; direct AppImage users are
  unaffected.
- Added guarded XDG-state receipts, matching installation markers, and
  regression tests that refuse unsafe paths, mismatched receipts, or tampering.
- Made icon generation deterministic by removing variable PNG metadata.

## v1.1.0 — 2026-07-11

- Updated from Electron 31 to exact Electron 43.1.0 and electron-builder 26.15.3.
- Added sandboxing, default-deny permissions, safe navigation/auth windows, external-link validation, hostname audit mode, locked builds, tests, CI, multi-size icons, atomic install, checksums, and profile purge.
- Added prominent privacy documentation and honest Chromium limitations.

## v1.0.0

- Initial Perplexity Computer wrapper. Superseded because its Electron runtime is unsupported.
