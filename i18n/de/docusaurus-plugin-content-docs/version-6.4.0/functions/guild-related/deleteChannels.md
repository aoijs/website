---
title: $deleteChannels
description: '$deleteChannels wird mehrere Kanäle löschen.'
id: deleteChannels
---

`$deleteChannels` löscht mehrere Kanäle.

## Verwendung

```php
$deleteChannels[...channels]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                   | Erforderlich |
| --------- | ---------- | ---------------------------------------------- |:------------:|
| ...Kanäle | ganze Zahl | Die Kanal-Ids der Kanäle, die gelöscht werden. |     wahr     |

## Beispiel(e)

Dies löscht mehrere Kanäle, stellen Sie sicher, dass die Argumente ersetzt werden:

```javascript
bot.command({
    name: 'deleteChannels',
    code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
