---
title: '$channelSendMessage'
description: '$channelSendMessage wird eine Nachricht in einem bestimmten Kanal senden.'
id: channelSendMessage
---

`$channelSendMessage` wird eine Nachricht in einem bestimmten Kanal senden.

## Verwendung

```php
$channelSendMessage[channelID;content;returnID?]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                                                                                  | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID  | ganze Zahl | Wo die Nachrichten gesendet werden.                                                                                           |     wahr     |
| inhalt     | string     | Wie der Inhalt der Nachricht sein sollte.                                                                                     |     wahr     |
| return ID? | boolean    | Wenn die ID der Nachricht zurückgegeben werden soll oder nicht. <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies wird "Hallo!" an den aktuellen Kanal senden:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;Hello!;false]
  `
});
```

### Embeds

Dies wird eine Einbettung mit Beschreibung und Fußzeile an den aktuellen Kanal senden:

```javascript
bot.command({
    name: 'channelSendMessage',
    code: `
  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]
  `
});
```
