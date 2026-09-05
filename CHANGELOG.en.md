# Changelog

[Deutsch](CHANGELOG.md) | [English](CHANGELOG.en.md)

This repository is a fork of [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm).
This document lists only the changes made **in this fork** on top of the original — not Wave
Terminal's regular release history (see [RELEASES.md](./RELEASES.md) or the
[official release notes](https://docs.waveterm.dev/releasenotes) for that).

Base of this fork: Wave Terminal `v0.14.5`.

Entries are sorted newest first.

## [PR #2](https://github.com/nodedropweb/waveterm/pull/2) — 2026-09-05

### Browser block

- **Changed the default homepage to `https://www.google.com`** — it previously opened Wave
  Terminal's own GitHub page by default. The homepage can still be changed permanently via the
  `web:defaulturl` setting in the Settings dialog, or more conveniently by right-clicking a
  browser block and choosing "Set Default Homepage" (global) or "Set Block Homepage" (for just
  that block).
  ([`91550a1`](https://github.com/nodedropweb/waveterm/commit/91550a1))

### Internationalization (i18n)

- **Translated the Wave AI mode dropdown into German** — the mode picker (e.g. "Quick" →
  "Schnell", "Balanced" → "Ausgewogen", "Deep" → "Tiefgehend") and the rest of the dropdown UI
  (section headers, premium/tool warnings, buttons) now go through the existing `react-i18next`
  setup instead of hardcoded English strings. User-authored custom modes keep their own,
  untranslated name.
  ([`74682a8`](https://github.com/nodedropweb/waveterm/commit/74682a8))
- **Made German the default README language**, with the existing translations (English, Korean,
  Traditional Chinese) kept and linked via the language switcher at the top of every README file.
  The previous English original was moved to `README.en.md`.
  ([`d5ae9ed`](https://github.com/nodedropweb/waveterm/commit/d5ae9ed))

### Keybindings

- **New `Ctrl+Shift+z` chord** followed by `=` / `-` / `0` to zoom in, zoom out, or reset the
  zoom of **only the focused block** — without affecting the rest of the UI. Previously
  `Cmd`/`Ctrl` `+`/`-` always zoomed the entire application. Implemented via new optional
  `zoomIn`/`zoomOut`/`zoomReset` hooks on the `ViewModel` interface; currently wired up for
  terminal blocks (adjusts the `term:fontsize` override metadata), other block types can adopt
  the same hooks later.
  ([`8d7d2b5`](https://github.com/nodedropweb/waveterm/commit/8d7d2b5))

### Terminal

- **Raised the maximum scrollback limit from 50,000 to 500,000 lines** (`term:scrollback`), so
  very large output (e.g. tailing sizeable log files) can be scrolled back through in full. Also
  fixed the accompanying docs, which still listed a stale max of 10,000.
  ([`82b645c`](https://github.com/nodedropweb/waveterm/commit/82b645c))

## PR #1 — 2026-09-04

### Internationalization (i18n)

- **Introduced a foundation for multi-language support** (`frontend/util/i18n/`) based on
  `react-i18next`, including a language atom (`languageAtom`) for switching at runtime and
  resource files for English and German (`locales/en.json`, `locales/de.json`).
- **Translated the "About Wave Terminal" dialog** (the first real use of the new i18n system),
  including an EN/DE toggle right inside the dialog.
  ([`99c60cc`](https://github.com/nodedropweb/waveterm/commit/99c60cc))
