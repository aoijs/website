---
title: '$unPinMessage'
description: '$unPinMessage wird eine bestimmte Nachricht auflösen.'
id: unPinMessage
---

`$unPinMessage` wird eine bestimmte Nachricht aufheben.

## Verwendung

```php
$unPinMessage[messageID?;channelID?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                           | Erforderlich |
| ------------- | ---------- | ------------------------------------------------------ |:------------:|
| nachrichtenID | ganze Zahl | Die ID der zu entspertenden Nachricht.                 |    falsch    |
| channelID     | ganze Zahl | Die ID des Kanals, in dem sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies wird die Nachricht des Bots anpinnen und sie nach zwei Sekunden auflösen:

```javascript
bot.command({
    Name: 'UnPinMessage',
    Code: `
  $unPinMessage[$get[id]]
  $wait[2s]
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // $let & $get verwenden, um die Nachrichtennummer
});
```