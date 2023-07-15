---
title: '$reboot'
description: '$reboot will restart your bot.'
id: reboot
---

`$reboot` will restart your bot.

## Використання

```php
$reboot
```

## Приклад(и)

This will restart your bot:

```javascript
bot.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```