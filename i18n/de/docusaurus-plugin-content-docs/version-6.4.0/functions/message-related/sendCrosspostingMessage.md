---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage wird eine bestimmte Nachricht zu den angegebenen Kanälen kreuzen.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` wird eine gegebene Nachricht an die angegebenen Kanäle kreuzen.

## Verwendung

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                      | Erforderlich |
| ------------- | ---------- | ------------------------------------------------- |:------------:|
| inhalt        | string     | Die zu sendende Nachricht.                        |     wahr     |
| ...ChannelIDs | ganze Zahl | Wo die angegebene Nachricht gesendet werden soll. |     wahr     |

## Beispiel(e)

Dies wird eine Nachricht zu mehreren Kanälen auf Ihrem Server kreuzen:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
