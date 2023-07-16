---
title: '$reboot'
description: '$reboot перезагрузит вашего бота.'
id: reboot
---

`$reboot` перезагрузит вашего бота.

## Использование

```php
$reboot
```

## Пример(ы)

Это перезапустит вашего бота:

```javascript
bot.command({
    name: "reboot",
    code: `
    $reboot
    `
});
```