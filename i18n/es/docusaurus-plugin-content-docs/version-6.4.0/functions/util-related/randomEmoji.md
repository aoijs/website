---
title: '$randomEmoji'
description: '$randomEmoji devolverá un ID de emoji aleatorio.'
id: randomEmoji
---

`$randomEmoji` devolverá un ID emoji aleatorio.

## Uso

```php
$randomEmoji
```

## Ejemplo(s)

Esto devolverá un ID de emoji aleatorio de tu gremio:

```javascript
bot.command({
    name: 'randomEmoji',
    code: `
  $randomEmoji
  `
});
```
