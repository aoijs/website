---
title: $shutdown
description: '$shutdown wird den Prozess Ihres Bots herunterfahren/beenden.'
id: shutdown
---

`$shutdown` wird den Prozess Ihres Bots herunterfahren/beenden.

## Verwendung

```php
$shutdown
```

## Beispiel(e)

Dies wird deinen Bot herunterfahren:

```javascript
bot.command({
    Name: "shutdown",
    code: `
    $shutdown
    `
});
```