---
title: '$userRoleColor'
description: '$userRoleColor devolverá el color de la función más alta asignada a un usuario.'
id: userRoleColor
---

`$userRoleColor` devolverá el color de la función más alta asignada a un usuario.

## Uso

```php
$getRoleColor[usuarioID?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                     | Requerido |
| ----------- | ------ | ------------------------------ |:---------:|
| usarioID?   | entero | La identificación del usuario. |   falso   |
| servidorID? | entero | ID del servidor.               |   falso   |

## Ejemplo(s)

Esto devolverá el color de su rol más alto:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
