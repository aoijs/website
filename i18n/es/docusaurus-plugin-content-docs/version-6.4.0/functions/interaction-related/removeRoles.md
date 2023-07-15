---
title: '$removeRoles'
description: '$removeRoles eliminará un rol dado de un miembro determinado.'
id: removeRoles
---

`$removeRoles` eliminará uno o varios roles de un miembro determinado.

## Uso

```php
$removeRoles[servidorID;ID de usuario;razon?;...rolesIDs]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                 | Requerido |
| ----------- | ------ | -------------------------------------------------------------------------- |:---------:|
| servidorID  | entero | El ID del gremio donde se encuentra el usuario y el rol.                   | verdadero |
| usarioID    | entero | El identificador de usuario del usuario cuyas reacciones serán eliminadas. | verdadero |
| ¿razón?     | string | razón que se mostrará en los registros de auditoría del gremio.            |   falso   |
| ...rolesIDs | entero | Los IDs de los roles que serán eliminados.                                 | verdadero |

## Ejemplo(s)

Esto eliminará un rol dado de ti (el rol debe estar por debajo del rol más alto del bot):

```javascript
bot.command({
    name: 'removeRoles',
    code: `
   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`
});
```