---
title: '$maxRam'
description: '$maxRam devolverá la cantidad máxima de Ram del bot.'
id: maxRam
---

`$maxRam` devolverá la cantidad máxima de Ram del bot.

## Uso

```php
$maxRam
```

## Ejemplo(s)

Esto devolverá a su bot la cantidad máxima de Ram disponible:

```javascript
bot.command({
    name: 'maxRam',
    code: `
  $maxRam
  `
});
```
