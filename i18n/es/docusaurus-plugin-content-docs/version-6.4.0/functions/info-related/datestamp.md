---
title: '$datestamp'
description: '$datestamp devolverá el día en MS.'
id: datestamp
---

`$datestamp` devolverá el día en MS.

## Modo de uso

```php
$datestamp
```

## Ejemplo(s)

Esto devolverá el día del mes, en MS ( estamos usando $humanizeMS para hacerlo legible ):

```javascript
bot.command({
    name: 'datestamp',
    code: `
  $humanizeMS[$datestamp]
  `
});
```