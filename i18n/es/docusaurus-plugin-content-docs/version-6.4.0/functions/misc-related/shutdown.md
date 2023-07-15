---
title: '$shutdown'
description: '$shutdown will shutdown / end the process of your bot.'
id: shutdown
---

`$shutdown` will shutdown / end the process of your bot.

## Modo de uso

```php
$shutdown
```

## Ejemplo(s)

This will shutdown your bot:

```javascript
bot.command({
    name: "shutdown",
    code: `
    $shutdown
    `
});
```