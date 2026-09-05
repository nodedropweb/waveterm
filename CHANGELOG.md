# Changelog

Dieses Repository ist ein Fork von [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm).
Dieses Dokument listet ausschließlich die Änderungen auf, die **in diesem Fork** zusätzlich zum
Original vorgenommen wurden — nicht die reguläre Versionshistorie von Wave Terminal selbst
(siehe dafür [RELEASES.md](./RELEASES.md) bzw. die [offiziellen Release Notes](https://docs.waveterm.dev/releasenotes)).

Basis dieses Forks: Wave Terminal `v0.14.5`.

Die Einträge sind neuestes zuerst sortiert.

## [PR #2](https://github.com/nodedropweb/waveterm/pull/2) — 2026-09-05

### Browser-Block

- **Standard-Startseite auf `https://www.google.com` geändert** — vorher wurde standardmäßig
  die GitHub-Seite von Wave Terminal geöffnet. Die Startseite lässt sich weiterhin dauerhaft über
  die Einstellung `web:defaulturl` im Settings-Dialog ändern, oder bequemer per Rechtsklick im
  Browser-Block über "Set Default Homepage" (global) bzw. "Set Block Homepage" (nur für den
  aktuellen Block).
  ([`91550a1`](https://github.com/nodedropweb/waveterm/commit/91550a1))

### Internationalisierung (i18n)

- **KI-Modus-Dropdown im Wave-AI-Panel ins Deutsche übersetzt** — die Modus-Auswahl (u. a.
  "Quick" → "Schnell", "Balanced" → "Ausgewogen", "Deep" → "Tiefgehend") sowie die gesamte
  Dropdown-Oberfläche (Sektionen, Premium-/Tool-Hinweise, Buttons) laufen jetzt über das
  bestehende `react-i18next`-Setup statt fest codierter englischer Texte. Selbst angelegte,
  benutzerdefinierte Modi behalten ihren eigenen, unübersetzten Namen.
  ([`74682a8`](https://github.com/nodedropweb/waveterm/commit/74682a8))
- **README auf Deutsch als Standardsprache**, bestehende Übersetzungen (Englisch, Koreanisch,
  Traditionelles Chinesisch) bleiben erhalten und sind über die Sprachleiste am Anfang jeder
  README-Datei verlinkt. Die vorherige englische Originaldatei wurde nach `README.en.md`
  verschoben.
  ([`d5ae9ed`](https://github.com/nodedropweb/waveterm/commit/d5ae9ed))

### Tastenkürzel

- **Neues Chord-Tastenkürzel `Ctrl+Shift+z`** gefolgt von `=` / `-` / `0`, um **nur den fokussierten
  Block** zu vergrößern, zu verkleinern bzw. auf die Standardgröße zurückzusetzen — ohne dass der
  Rest der Oberfläche betroffen ist. Bisher zoomten `Cmd`/`Ctrl` `+`/`-` immer die gesamte
  Anwendung. Umgesetzt über neue optionale `zoomIn`/`zoomOut`/`zoomReset`-Hooks im
  `ViewModel`-Interface; aktuell für Terminal-Blöcke implementiert (passt die
  `term:fontsize`-Override-Metadaten an), weitere Blocktypen können dieselben Hooks künftig
  ergänzen.
  ([`8d7d2b5`](https://github.com/nodedropweb/waveterm/commit/8d7d2b5))

### Terminal

- **Maximales Scrollback-Limit von 50.000 auf 500.000 Zeilen angehoben** (`term:scrollback`),
  damit sich auch sehr umfangreiche Ausgaben (z. B. beim Tailen großer Log-Dateien) vollständig
  zurückscrollen lassen. Die zugehörige Dokumentation, die noch einen veralteten Wert von 10.000
  auswies, wurde korrigiert.
  ([`82b645c`](https://github.com/nodedropweb/waveterm/commit/82b645c))

## PR #1 — 2026-09-04

### Internationalisierung (i18n)

- **Grundgerüst für Mehrsprachigkeit eingeführt** (`frontend/util/i18n/`) auf Basis von
  `react-i18next`, inklusive Sprach-Atom (`languageAtom`) zum Umschalten zur Laufzeit und
  Ressourcen-Dateien für Englisch und Deutsch (`locales/en.json`, `locales/de.json`).
- **"Über Wave Terminal"-Dialog übersetzt** (erster produktiver Anwendungsfall des neuen
  i18n-Systems) inklusive EN/DE-Umschalter direkt im Dialog.
  ([`99c60cc`](https://github.com/nodedropweb/waveterm/commit/99c60cc))
