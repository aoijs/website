---
title: '$executionTime'
description: '$executionTime devolverá el tiempo de ejecución.'
id: executionTime
---

`$executionTime` retornará el tiempo de ejecución.

## Uso

```php
$executionTime
```

## Ejemplo(s)

Esto devolverá el tiempo de ejecución de cuánto tiempo tardó en ejecutar este código:

```javascript
bot.command({
    name: "executionTime",
    code: `
    Esto tomó: $executionTime MS
  `
});
```