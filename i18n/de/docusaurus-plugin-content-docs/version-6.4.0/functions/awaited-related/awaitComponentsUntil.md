---
title: $awaitComponentsUntil
description: '$awaitComponentsUntil wartet auf Nachrichtenkomponenten.'
id: awaitComponentsUntil
---

`$awaitComponentsUntil` wartet auf Nachrichtenkomponenten.

## Verwendung

```php
$awaitComponentsUntil[channelID;messageID;userFilter;time;customIDs;commands;errorMsg?;awaitData?]
```

## Parameter

| Feld          | Typ        | Beschreibung                                                                                                           | Erforderlich |
| ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | string     | Kanal-ID.                                                                                                              |     wahr     |
| nachrichtenID | string     | Nachrichten-ID.                                                                                                        |     wahr     |
| userfilter    | ganze Zahl | Auf was der Bot antworten wird <br /> 1. **alle** <br /> 2. **spezifische Benutzer-ID** - jede Benutzer-ID |     wahr     |
| reaktionen    | string     | Reaktionen, auf die der Bot hören wird, können Sie mehrere Emojis mit einem Komma trennen ( `,`)                       |     wahr     |
| Befehle       | string     | Befehle, die ausgeführt werden, können Sie mehrere Emojis mit einem Komma trennen ( `,`)                               |     wahr     |
| errorMsg?     | string     | Fehlermeldung, wenn der Befehl abläuft.                                                                                |    falsch    |
| wartendaten?  | string     | Gewartete Daten.                                                                                                       |    falsch    |