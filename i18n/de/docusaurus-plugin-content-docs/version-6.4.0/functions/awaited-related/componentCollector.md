---
title: '$componentCollector'
description: '$componentCollector wird einen Sammler für die angegebenen Komponenten erstellen.'
id: componentCollector
---

`$componentCollector` wird einen Sammler für die angegebenen Komponenten erstellen.

## Verwendung

```php
$componentCollector[messageID;userFilter;time;customIDs;commands;errorMsg?;endcommand?;awaitData?]
```

## Parameter

| Feld          | Typ        | Beschreibung                                                                                                                | Erforderlich |
| ------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | Die Nachrichten-ID.                                                                                                         |     wahr     |
| userfilter    | string     | Zu dem, was der Bot antworten wird. <br /> 1. **alle** <br /> 2. **spezifische Benutzer-ID** - jede Benutzer-ID |     wahr     |
| Zeit          | string     | Wenn der Befehl endet/abläuft.                                                                                              |     wahr     |
| kundenID      | string     | Die Komponenten-ID.                                                                                                         |     wahr     |
| Befehle       | string     | Befehle, die ausgeführt werden, können Sie mehrere Emojis mit einem Komma trennen ( `,`).                                   |     wahr     |
| errorMsg?     | string     | Fehlermeldung, wenn der Befehl abläuft.                                                                                     |    falsch    |
| endcommand?   | ganze Zahl | Ende-Befehl, der ausgeführt wird, wenn vorherige Befehle ausgeführt wurden.                                                 |    falsch    |
| wartendaten?  | string     | Gewartete Daten.                                                                                                            |    falsch    |
