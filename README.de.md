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

[English](README.md) | [Deutsch](README.de.md) | [한국어](README.ko.md) | [繁體中文](README.zh-TW.md)

</div>

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwavetermdev%2Fwaveterm.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwavetermdev%2Fwaveterm?ref=badge_shield)

> Dies ist eine von der Community erstellte deutsche Übersetzung. Die aktuellste Originalversion findest du in [README.md](README.md).

Wave ist ein Open-Source-Terminal mit integrierter KI für macOS, Linux und Windows. Es funktioniert mit jedem beliebigen KI-Modell. Nutze deine eigenen API-Schlüssel für OpenAI, Claude oder Gemini, oder betreibe lokale Modelle über Ollama und LM Studio. Es ist kein Konto erforderlich.

Wave unterstützt außerdem dauerhafte SSH-Sitzungen, die Netzwerkunterbrechungen und Neustarts überstehen, inklusive automatischer Wiederverbindung. Bearbeite entfernte Dateien mit einem integrierten grafischen Editor und sieh dir Dateien direkt im Terminal an, ohne es zu verlassen.

![WaveTerm Screenshot](./assets/wave-screenshot.webp)

## Hauptfunktionen

- Wave AI - Kontextbewusster Terminal-Assistent, der deine Terminal-Ausgabe liest, Widgets analysiert und Dateioperationen durchführt
- Dauerhafte SSH-Sitzungen - Entfernte Terminal-Sitzungen überstehen Verbindungsabbrüche, Netzwerkwechsel und Wave-Neustarts dank automatischer Wiederverbindung
- Flexible Drag-&-Drop-Oberfläche zum Organisieren von Terminal-Blöcken, Editoren, Webbrowsern und KI-Assistenten
- Integrierter Editor zum Bearbeiten entfernter Dateien mit Syntax-Highlighting und modernen Editor-Funktionen
- Umfangreiches Dateivorschausystem für entfernte Dateien (Markdown, Bilder, Video, PDFs, CSVs, Verzeichnisse)
- Schnelles Vollbild-Umschalten für jeden Block - Terminals, Editoren und Vorschauen für bessere Sichtbarkeit vergrößern und sofort zur Mehrblock-Ansicht zurückkehren
- KI-Chat-Widget mit Unterstützung für mehrere Modelle (OpenAI, Claude, Azure, Perplexity, Ollama)
- Command Blocks zum Isolieren und Überwachen einzelner Befehle
- Ein-Klick-Verbindungen zu entfernten Rechnern mit vollem Terminal- und Dateisystemzugriff
- Sichere Speicherung von Secrets über native System-Backends - API-Schlüssel und Zugangsdaten lokal speichern und über SSH-Sitzungen hinweg nutzen
- Umfangreiche Anpassungsmöglichkeiten wie Tab-Themes, Terminal-Stile und Hintergrundbilder
- Leistungsstarkes `wsh`-Befehlssystem zur Verwaltung deines Workspace über die CLI und zum Austausch von Daten zwischen Terminal-Sitzungen
- Verbundene Dateiverwaltung mit `wsh file` - Dateien nahtlos zwischen lokalen und entfernten SSH-Hosts kopieren und synchronisieren

## Wave AI

Wave AI ist dein kontextbewusster Terminal-Assistent mit Zugriff auf deinen Workspace:

- **Terminal-Kontext**: Liest Terminal-Ausgabe und Scrollback zur Fehlersuche und Analyse
- **Dateioperationen**: Dateien lesen, schreiben und bearbeiten mit automatischen Backups und Nutzerfreigabe
- **CLI-Integration**: Nutze `wsh ai`, um Ausgaben weiterzuleiten oder Dateien direkt über die Kommandozeile anzuhängen
- **BYOK-Unterstützung**: Bring deine eigenen API-Schlüssel für OpenAI, Claude, Gemini, Azure und andere Anbieter mit
- **Lokale Modelle**: Betreibe lokale Modelle mit Ollama, LM Studio und anderen OpenAI-kompatiblen Anbietern
- **Kostenlose Beta**: Enthaltenes KI-Guthaben, während wir die Erfahrung weiter verfeinern
- **Demnächst**: Befehlsausführung (mit Freigabe)

Mehr erfährst du in unserer [Wave AI-Dokumentation](https://docs.waveterm.dev/waveai) und der [Dokumentation zu Wave AI-Modi](https://docs.waveterm.dev/waveai-modes).

## Installation

Wave Terminal läuft unter macOS, Linux und Windows.

Plattformspezifische Installationsanleitungen findest du [hier](https://docs.waveterm.dev/gettingstarted).

Du kannst Wave Terminal auch direkt installieren von: [www.waveterm.dev/download](https://www.waveterm.dev/download).

### Mindestanforderungen

Wave Terminal läuft auf folgenden Plattformen:

- macOS 11 oder neuer (arm64, x64)
- Windows 10 1809 oder neuer (x64)
- Linux basierend auf glibc-2.28 oder neuer (Debian 10, RHEL 8, Ubuntu 20.04 usw.) (arm64, x64)

Der WSH-Helper läuft auf folgenden Plattformen:

- macOS 11 oder neuer (arm64, x64)
- Windows 10 oder neuer (x64)
- Linux Kernel 2.6.32 oder neuer (x64), Linux Kernel 3.1 oder neuer (arm64)

## Roadmap

Wave wird ständig weiterentwickelt! Unsere Roadmap wird laufend mit unseren Zielen für jedes Release aktualisiert. Du findest sie [hier](./ROADMAP.md).

Möchtest du zu unseren zukünftigen Releases beitragen? Vernetze dich mit uns auf [Discord](https://discord.gg/XfvZ334gwU) oder erstelle eine [Feature-Anfrage](https://github.com/wavetermdev/waveterm/issues/new/choose)!

## Links

- Homepage &mdash; https://www.waveterm.dev
- Download-Seite &mdash; https://www.waveterm.dev/download
- Dokumentation &mdash; https://docs.waveterm.dev
- X &mdash; https://x.com/wavetermdev
- Discord-Community &mdash; https://discord.gg/XfvZ334gwU

## Aus dem Quellcode erstellen

Siehe [Wave Terminal erstellen](BUILD.md).

## Mitwirken

Wave nutzt GitHub Issues für die Fehler- und Aufgabenverfolgung.

Weitere Informationen findest du in unserem [Leitfaden für Mitwirkende](CONTRIBUTING.md), der Folgendes enthält:

- [Möglichkeiten mitzuwirken](CONTRIBUTING.md#contributing-to-wave-terminal)
- [Richtlinien für Beiträge](CONTRIBUTING.md#before-you-start)

### Wave sponsern ❤️

Wenn dir Wave Terminal nützlich ist - privat oder in deinem Unternehmen - ziehe in Betracht, die Entwicklung zu sponsern.

Sponsoring hilft, die Zeit zu unterstützen, die in den Aufbau und die Pflege des Projekts investiert wird.

- https://github.com/sponsors/wavetermdev

## Lizenz

Wave Terminal ist unter der Apache-2.0-Lizenz lizenziert. Weitere Informationen zu unseren Abhängigkeiten findest du [hier](./ACKNOWLEDGEMENTS.md).
</content>
