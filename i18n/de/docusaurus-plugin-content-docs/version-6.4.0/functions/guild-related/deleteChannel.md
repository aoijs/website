---
title: $deleteChannel
description: '$deleteChannel löscht einen bestimmten Kanal.'
id: deleteChannel
---

`$deleteChannel` löscht einen bestimmten Kanal.

## Verwendung

```php
$deleteChannel[channelID]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                | Erforderlich |
| --------- | ---------- | ------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die Kanal-ID des Kanals, der gelöscht wird. |     wahr     |

## Beispiel(e)

Dies löscht den Kanal, in dem der Befehl ausgeführt wurde:

```javascript
bot.command({
    name: 'deleteChannel',
    code: `
  $deleteChannel[$channelID]
  `
});
```
