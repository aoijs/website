---
title: '$shutdown'
description: '$shutdown cerrará / finalizará el proceso de tu bot.'
id: shutdown
---

`$shutdown` cerrará / finalizará el proceso de tu bot.

## Uso

```php
$shutdown
```

## Ejemplo(s)

Esto reiniciará tu bot:

```javascript
bot.command({
    name: "shutdown",
    code: `
    $shutdown
    `
});
```