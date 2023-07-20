---
title: $username
description: '$username devolverá el nombre de usuario de un usuario.'
id: username
---

`$username` devolverá el nombre de usuario de un usuario.

## Uso

```php
$username[usuarioID?]
```

## Parámetros

| Campo     | Tipo   | Parámetros                     | Requerido |
| --------- | ------ | ------------------------------ |:---------:|
| usarioID? | entero | La identificación del usuario. |   falso   |

## Ejemplo(s)

Esto devolverá tu ID de usuario:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
