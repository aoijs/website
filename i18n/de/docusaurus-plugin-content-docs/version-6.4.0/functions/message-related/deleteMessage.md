---
title: $deleteMessage
description: '$deleteMessage wird eine bestimmte Nachricht löschen.'
id: deleteMessage
---

`$deleteMessage` wird eine bestimmte Nachricht löschen.

## Verwendung

```php
$deleteMessage[messageID;channelID]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                      | Erforderlich |
| ------------- | ---------- | ------------------------------------------------- |:------------:|
| nachrichtenID | ganze Zahl | Die Nachrichten-ID des Kanals, die gelöscht wird. |     wahr     |
| channelID     | ganze Zahl | Die Kanal-ID, in der sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies wird die gesendete Nachricht nach 15 Sekunden senden und löschen ( Wir verwenden $let und $get um die Nachricht ID temporär zu speichern):

```javascript
bot.command({
    name: 'deleteMessage',
    code: `
  $deleteMessage[$get[id];$channelID]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```