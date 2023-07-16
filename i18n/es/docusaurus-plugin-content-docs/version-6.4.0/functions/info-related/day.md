---
title: '$day'
description: '$day devolverá el día del mes.'
id: day
---

`$day` devolverá el día del mes.

## Uso

```php
$day
```

## Ejemplo(s)

Esto devolverá el día del mes, por ejemplo, `thursday`:

```javascript
bot.command({
    name: 'day',
    code: `
  Hoy es: $day
  `
});
```