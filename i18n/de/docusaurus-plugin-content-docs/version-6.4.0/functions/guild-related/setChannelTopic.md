---
title: $setChannelTopic
description: '$setChannelTopic ändert das Thema eines Kanals.'
id: setChannelTopic
---

`$setChannelTopic` ändert das Thema eines Kanals.

## Verwendung

```php
$setChannelTopic[channelID;topic]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                   | Erforderlich |
| --------- | ---------- | ---------------------------------------------- |:------------:|
| channelID | ganze Zahl | Die ID des Kanals, dessen Thema geändert wird. |     wahr     |
| thema     | string     | Inhalt des neuen Kanalthemas.                  |     wahr     |

## Beispiel(e)

Dies ändert das Thema des Kanals, in dem der Befehl ausgeführt wird:

```javascript
bot.command({
    name: 'setChannelTopic',
    code: `
   $setChannelTopic[$channelID;Hallo! Dies ist das neue Thema des Kanals!]`
});
```