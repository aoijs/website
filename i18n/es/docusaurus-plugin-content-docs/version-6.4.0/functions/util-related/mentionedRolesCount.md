---
title: $mentionedRolesCount
description: '$mentionedRolesCount devolverá la cantidad de menciones de rol dentro de un mensaje.'
id: mentionedRolesCount
---

`$mentionedRolesCount` devolverá la cantidad de menciones de rol dentro de un mensaje.

## Uso

```php
$mentionedRolesCount
```

## Ejemplo(s)

Esto devolverá la cantidad de menciones de rol en el texto dado:

```javascript
bot.command({
    name: 'mentionedRolesCount',
    code: `
  Tú tienes: ¡Menciones de rol $mentionedRolesCount en tu mensaje!
`
});
```
