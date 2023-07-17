---
title: $month
description: '$month wird den aktuellen Monat zurückgeben.'
id: month
---

`$month` wird den aktuellen Monat zurückgeben.

## Verwendung

```php
$month
```

## Beispiel(e)

Dies gibt den aktuellen Monat zurück:

```javascript
bot.command({
    name: "month",
    code: `
    $month
    `
});
```