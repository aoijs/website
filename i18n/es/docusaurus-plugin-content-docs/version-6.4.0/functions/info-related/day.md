---
title: '$day'
description: '$day devolverá el día del mes.'
id: day
---

`$day` devolverá el día del mes.

## Modo de uso

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