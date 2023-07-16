---
title: '$userRolesCount'
description: '$userRolesCount devolverá el recuento de roles de un usuario.'
id: userRolesCount
---

`$userRolesCount` devolverá el recuento de roles de un usuario.

## Uso

```php
$userRolesCount[usuarioID?;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                     | Requerido |
| ----------- | ------ | ------------------------------ |:---------:|
| usarioID?   | entero | La identificación del usuario. |   falso   |
| servidorID? | entero | ID del servidor.               |   falso   |

## Ejemplo(s)

Esto devolverá la cantidad de roles que ha asignado:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
