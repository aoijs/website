---
title: '$month'
description: '$month devolverá el mes actual.'
id: month
---

`$month` devolverá el mes actual.

## Uso

```php
$month
```

## Ejemplo(s)

Esto devolverá el mes actual:

```javascript
bot.command({
    name: "month",
    code: `
    $month
    `
});
```