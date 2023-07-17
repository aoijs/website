---
title: '$messagePublish'
description: '$messagePublish veröffentlicht eine Nachricht in einem Ankündigungskanal.'
id: messagePublish
---

`$messagePublish` wird eine Nachricht in einem Ankündigungskanal veröffentlichen.

## Verwendung

```php
$messagePublish[messageID;channelID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                      | Erforderlich |
| ------------- | ---------- | ----------------------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | Die ID der Nachricht, die veröffentlicht werden soll.             |     wahr     |
| channelID?    | ganze Zahl | Die ID des Kanals, in dem sich die angegebene Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies wird eine Nachricht veröffentlichen ( funktioniert nur in Ankündigungskanälen):

```javascript
bot.command({
    name: 'messagePublish',
    code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Hello!;true]]
  `
});
```
