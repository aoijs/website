---
title: $messageType
description: '$messageType wird den Typ einer gegebenen Nachricht zurückgeben.'
id: messageType
---

`$messageType` wird den Typ einer gegebenen Nachricht zurückgeben.

## Verwendung

```php
$messageType[messageID?;channelID?]
```

## Verwendung

| Feld           | Typ        | Beschreibung                                       | Erforderlich |
| -------------- | ---------- | -------------------------------------------------- |:------------:|
| nachrichtenID? | ganze Zahl | ID der Nachricht.                                  |    falsch    |
| channelID?     | ganze Zahl | ID des Kanals, in dem sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies gibt den Nachrichtentyp der Nachricht zurück, die den Befehl ausgeführt hat:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
