---
title: '$readyTimestamp'
description: '$readyTimestamp devolverá el timestamp de cuando el bot estaba listo.'
id: readyTimestamp
---

`$readyTimestamp` devolverá el timestamp de cuando el bot estaba listo.

## Uso

```php
$readyTimestamp
```

## Ejemplo(s)

Esto devolverá la última vez que su bot arrancó/estaba listo:

```javascript
bot.command({
    name: 'readyTimestamp',
    code: `
  $readyTimestamp
  `
});
```
