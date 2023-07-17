---
title: '$reboot'
description: '$reboot reiniciará tu bot.'
id: reboot
---

`$reboot` reiniciará tu bot.

## Uso

```php
$reboot
```

## Ejemplo(s)

Esto reiniciará tu bot:

```javascript
bot.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```