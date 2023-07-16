---
title: '$sendTTS'
description: '$sendTTS sendet eine Text-zu-Sprache in einem bestimmten Kanal.'
id: sendTTS
---

`$sendTTS` wird eine Text-zu-Sprach-Nachricht in einem bestimmten Kanal senden.

## Verwendung

```php
$sendTTS[channelID;message;returnID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                             | Erforderlich |
| ---------- | ---------- | ---------------------------------------------------------------------------------------- |:------------:|
| channelID  | ganze Zahl | Die ID des Kanals, in dem die Text-zu-Sprach-Nachricht gesendet wird.                    |     wahr     |
| nachricht  | string     | Der Inhalt der TTS-Nachricht.                                                            |     wahr     |
| return ID? | boolean    | Rücksende-Nachrichten-ID?  <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies wird eine TTS Nachricht im aktuellen Kanal senden:

```javascript
bot.command({
    name: 'sendTTS',
    code: `
   $sendTTS[$channelIDHello!;false]
  `
});
```