---
title: $messageURL
description: '$messageURL wird die URL einer gegebenen Nachricht zurückgeben.'
id: messageURL
---

`$messageURL` gibt die URL einer gegebenen Nachricht zurück.

## Verwendung

```php
$messageURL[messageID?;channelID?]
```

## Verwendung

| Feld           | Typ        | Beschreibung                                          | Erforderlich |
| -------------- | ---------- | ----------------------------------------------------- |:------------:|
| nachrichtenID? | ganze Zahl | ID der Nachricht.                                     |    falsch    |
| channelID?     | ganze Zahl | ID der Nachricht, in der sich die Nachricht befindet. |    falsch    |

## Beispiel(e)

Dies gibt die URL der Nachricht zurück, die den Befehl ausgeführt hat:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
