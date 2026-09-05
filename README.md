<p align="center">
  <a href="https://www.waveterm.dev">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="./assets/wave-dark.png">
		<source media="(prefers-color-scheme: light)" srcset="./assets/wave-light.png">
		<img alt="Wave Terminal Logo" src="./assets/wave-light.png" width="240">
	</picture>
  </a>
  <br/>
</p>

# Wave Terminal

<div align="center">

[Deutsch](README.md) | [English](README.en.md) | [한국어](README.ko.md) | [繁體中文](README.zh-TW.md)

</div>

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwavetermdev%2Fwaveterm.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwavetermdev%2Fwaveterm?ref=badge_shield)

Wave ist ein Open-Source-Terminal mit integrierter KI für macOS, Linux und Windows. Es funktioniert mit jedem KI-Modell: Eigene API-Schlüssel für OpenAI, Claude oder Gemini mitbringen, oder lokale Modelle über Ollama und LM Studio betreiben. Es ist kein Account erforderlich.

Wave unterstützt außerdem dauerhafte SSH-Sitzungen, die Netzwerkunterbrechungen und Neustarts überstehen und sich automatisch wiederverbinden. Entfernte Dateien lassen sich mit einem integrierten grafischen Editor bearbeiten und direkt im Terminal als Vorschau anzeigen.

![WaveTerm Screenshot](./assets/wave-screenshot.webp)

## Hauptfunktionen

- Wave AI - Kontextbewusster Terminal-Assistent, der die Terminal-Ausgabe liest, Widgets analysiert und Dateioperationen ausführt
- Dauerhafte SSH-Sitzungen - Entfernte Terminal-Sitzungen überstehen Verbindungsabbrüche, Netzwerkwechsel und Wave-Neustarts dank automatischer Wiederverbindung
- Flexible Drag-&-Drop-Oberfläche zum Organisieren von Terminal-Blöcken, Editoren, Web-Browsern und KI-Assistenten
- Integrierter Editor zum Bearbeiten entfernter Dateien mit Syntax-Highlighting und modernen Editor-Funktionen
- Umfangreiches Dateivorschau-System für entfernte Dateien (Markdown, Bilder, Video, PDFs, CSVs, Verzeichnisse)
- Schneller Vollbild-Umschalter für jeden Block - Terminals, Editoren und Vorschauen für bessere Sichtbarkeit vergrößern und sofort wieder zur Mehrblock-Ansicht zurückkehren
- KI-Chat-Widget mit Unterstützung für mehrere Modelle (OpenAI, Claude, Azure, Perplexity, Ollama)
- Command Blocks zum Isolieren und Überwachen einzelner Befehle
- Ein-Klick-Remoteverbindungen mit vollem Terminal- und Dateisystemzugriff
- Sichere Speicherung von Zugangsdaten über native System-Backends - API-Schlüssel und Zugangsdaten lokal speichern und über SSH-Sitzungen hinweg nutzen
- Umfangreiche Anpassungsmöglichkeiten, darunter Tab-Themes, Terminal-Stile und Hintergrundbilder
- Leistungsstarkes `wsh`-Befehlssystem zur Verwaltung des Workspaces über die CLI und zum Teilen von Daten zwischen Terminal-Sitzungen
- Verbundene Dateiverwaltung mit `wsh file` - Dateien nahtlos zwischen lokalen und entfernten SSH-Hosts kopieren und synchronisieren

## Wave AI

Wave AI ist der kontextbewusste Terminal-Assistent mit Zugriff auf den gesamten Workspace:

- **Terminal-Kontext**: Liest Terminal-Ausgabe und Scrollback zur Fehlersuche und Analyse
- **Dateioperationen**: Dateien lesen, schreiben und bearbeiten - mit automatischen Backups und Nutzerbestätigung
- **CLI-Integration**: Mit `wsh ai` Ausgaben per Pipe weiterleiten oder Dateien direkt von der Kommandozeile anhängen
- **BYOK-Unterstützung**: Eigene API-Schlüssel für OpenAI, Claude, Gemini, Azure und weitere Anbieter mitbringen
- **Lokale Modelle**: Lokale Modelle mit Ollama, LM Studio und anderen OpenAI-kompatiblen Anbietern betreiben
- **Kostenlose Beta**: Enthaltenes KI-Guthaben, während die Erfahrung weiter verfeinert wird
- **Demnächst**: Befehlsausführung (mit Bestätigung)

Mehr dazu in der [Wave-AI-Dokumentation](https://docs.waveterm.dev/waveai) und der [Wave-AI-Modi-Dokumentation](https://docs.waveterm.dev/waveai-modes).

## Installation

Wave Terminal läuft auf macOS, Linux und Windows.

Plattformspezifische Installationsanleitungen gibt es [hier](https://docs.waveterm.dev/gettingstarted).

Wave Terminal kann außerdem direkt von hier installiert werden: [www.waveterm.dev/download](https://www.waveterm.dev/download).

### Mindestanforderungen

Wave Terminal läuft auf folgenden Plattformen:

- macOS 11 oder neuer (arm64, x64)
- Windows 10 1809 oder neuer (x64)
- Linux basierend auf glibc-2.28 oder neuer (Debian 10, RHEL 8, Ubuntu 20.04 usw.) (arm64, x64)

Der WSH-Helper läuft auf folgenden Plattformen:

- macOS 11 oder neuer (arm64, x64)
- Windows 10 oder neuer (x64)
- Linux Kernel 2.6.32 oder neuer (x64), Linux Kernel 3.1 oder neuer (arm64)

## Änderungen in diesem Fork

Dieses Repository ist ein Fork von [wavetermdev/waveterm](https://github.com/wavetermdev/waveterm).
Alle Änderungen, die zusätzlich zum Original vorgenommen wurden, sind im [CHANGELOG](./CHANGELOG.md)
dokumentiert.

## Roadmap

Wave wird laufend weiterentwickelt! Die Roadmap wird kontinuierlich mit den Zielen für jedes Release aktualisiert. Sie ist [hier](./ROADMAP.md) zu finden.

Ihr habt Ideen für zukünftige Releases? Meldet euch auf [Discord](https://discord.gg/XfvZ334gwU) oder eröffnet einen [Feature Request](https://github.com/wavetermdev/waveterm/issues/new/choose)!

## Links

- Homepage &mdash; https://www.waveterm.dev
- Download-Seite &mdash; https://www.waveterm.dev/download
- Dokumentation &mdash; https://docs.waveterm.dev
- X &mdash; https://x.com/wavetermdev
- Discord-Community &mdash; https://discord.gg/XfvZ334gwU

## Aus dem Quellcode bauen

Siehe [Wave Terminal bauen](BUILD.md).

## Mitwirken

Wave nutzt GitHub Issues für die Fehler- und Feature-Verfolgung.

Weitere Informationen gibt es im [Leitfaden für Mitwirkende](CONTRIBUTING.md), unter anderem:

- [Möglichkeiten mitzuwirken](CONTRIBUTING.md#contributing-to-wave-terminal)
- [Richtlinien für Beiträge](CONTRIBUTING.md#before-you-start)

### Wave sponsern ❤️

Wenn Wave Terminal für dich oder dein Unternehmen nützlich ist, zieh in Erwägung, die Entwicklung zu sponsern.

Sponsoring unterstützt den Zeitaufwand, der in den Bau und die Pflege des Projekts fließt.

- https://github.com/sponsors/wavetermdev

## Lizenz

Wave Terminal steht unter der Apache-2.0-Lizenz. Weitere Informationen zu den verwendeten Abhängigkeiten gibt es [hier](./ACKNOWLEDGEMENTS.md).
