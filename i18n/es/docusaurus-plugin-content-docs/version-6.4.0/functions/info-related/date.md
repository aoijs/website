---
title: '$date'
description: '$date devolverá el día del mes.'
id: date
---

`$date` devolverá el día del mes.

## Modo de uso

```php
$date
```

## Ejemplo(s)

Esto devolverá el día del mes, por ejemplo, `28`:

```javascript
bot.command({
    name: 'date',
    code: `
  $date
  `
});
```