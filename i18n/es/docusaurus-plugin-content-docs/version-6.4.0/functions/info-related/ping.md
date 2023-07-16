---
title: '$ping'
description: '$ping devolverá la latencia del bot.'
id: ping
---

`$ping` devolverá la latencia del bot.

## Uso

```php
$ping
```

## Ejemplo(s)

Esto devolverá la latencia de su bot en MS:

```javascript
bot.command({
    name: 'ping',
    code: `
  Mi ping es: $pingMS
  `
});
```
