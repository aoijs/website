---
title: '$ram'
description: '$ram devolverá el uso de RAM de tu bot.'
id: ram
---

`$ram` devolverá el uso de RAM de tu bot.

## Uso

```php
$ram
```

## Ejemplo(s)

Esto devolverá el uso de la RAM y la cantidad disponible de RAM:

```javascript
bot.command({
    name: 'ram',
    code: `
  Actualmente estoy usando \`$ram%\` de \`$maxRam%\`!
  `
});
```
