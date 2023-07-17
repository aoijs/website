---
title: $ping
description: '$ping wird die Latenz des Bots zurückgeben.'
id: ping
---

`$ping` gibt die Latenz des Bots zurück.

## Verwendung

```php
$ping
```

## Beispiel(e)

Dies gibt die Latenz Ihres Bots in MS zurück:

```javascript
bot.command({
    name: 'ping',
    code: `
  Mein Ping ist: $pingMS!
  `
});
```
