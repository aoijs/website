---
title: $useChannel
description: '$useChannel wird den angegebenen Kanal verwenden und stattdessen alle Funktionen innerhalb dieses Kanals ausführen.'
id: useChannel
---

`$useChannel` wird den angegebenen Kanal verwenden und stattdessen alle Funktionen innerhalb dieses Kanals ausführen.

## Verwendung

```php
$useChannel[channelID]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                | Erforderlich |
| --------- | ---------- | ------------------------------------------- |:------------:|
| channelID | ganze Zahl | Wo die Funktionen ausgeführt werden sollen. |     wahr     |

## Beispiel(e)

Dies wird eine Einbettung in den aktuellen Kanal senden:

```javascript
bot.command({
    Name: "useChannel",
    Code: `
    $description[Hello!]
    $useChannel[$channelID]
    `
});
```