---
title: '$reboot'
description: '$reboot will restart your bot.'
id: reboot
---

`$reboot` will restart your bot.

## Modo de uso

```php
$reboot
```

## Ejemplo(s)

This will restart your bot:

```javascript
bot.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```