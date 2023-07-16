---
title: '$killClient'
description: '$killClient wird deinen Bot zwingend herunterfahren.'
id: killClient
---

`$killClient` wird Ihren Bot zwingend herunterfahren.

## Verwendung

```php
$killClient
```

## Beispiel(e)

Dies wird deinen Bot zwingend herunterfahren:

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```