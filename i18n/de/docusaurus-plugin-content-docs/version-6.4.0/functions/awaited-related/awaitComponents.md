---
title: $awaitComponents
description: '$awaitComponents wartet auf Komponenten für die angegebene Nutzung.'
id: awaitComponents
---

`$awaitComponents` wartet auf Komponenten für die angegebene Benutzungsanzahl.

## Verwendung

```php
$awaitComponents[messageID;userFilter;customID;commands;errorMsg?;uses?;awaitData?]
```

## Parameter

| Feld          | Typ        | Beschreibung                                                                                                | Erforderlich |
| ------------- | ---------- | ----------------------------------------------------------------------------------------------------------- | :----------: |
| nachrichtenID | ganze Zahl | Nachrichten-ID.                                                                                             |     wahr     |
| userfilter    | string     | Auf was der Bot antworten wird <br /> 1. **alle** <br /> 2. **spezifische Benutzer-ID** - jede Benutzer-ID. |     wahr     |
| kundenID      | string     | Eigene ID.                                                                                                  |     wahr     |
| Befehle       | string     | Befehle, die ausgeführt werden, können Sie mehrere Befehle mit einem Komma trennen ( `,`)                   |     wahr     |
| errorMsg?     | string     | fehlermeldung, wenn der Befehl abläuft                                                                      |    falsch    |
| verwendet?    | ganze Zahl | wie viele Verwendungen bis die Komponente nicht mehr funktioniert                                           |    falsch    |
| wartendaten?  | string     | erwartete Daten                                                                                             |    falsch    |