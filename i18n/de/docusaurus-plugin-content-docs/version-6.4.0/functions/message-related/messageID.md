---
title: $messageID
description: '$messageID wird die Nachrichten-ID zurückgeben.'
id: messageID
---

`$messageID` wird die Nachrichten-ID zurückgeben.

## Verwendung

```php
$messageID
```

## Beispiel(e)

Dies gibt die Nachrichten-ID der Nachricht zurück, mit der Sie den Befehl ausgeführt haben:

```javascript
bot.command({
    Name: 'messageID',
    Code: `
  Die Nachricht ID deiner gerade gesendeten Nachricht ist: "$messageID"
  `
});
```
