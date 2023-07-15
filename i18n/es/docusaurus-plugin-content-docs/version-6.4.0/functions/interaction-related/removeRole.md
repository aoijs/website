---
title: '$removeRole'
description: '$removeRole eliminará un rol dado de un miembro determinado.'
id: removeRole
---

`$removeRole` eliminará un rol dado de un miembro determinado.

## Uso

```php
$removeRole[servidorID;ID de usuario;rolID;razon?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                                 | Requerido |
| ---------- | ------ | -------------------------------------------------------------------------- |:---------:|
| servidorID | entero | El ID de la hermandad de donde están ubicados los roles.                   | verdadero |
| usarioID   | entero | El identificador de usuario del usuario cuyas reacciones serán eliminadas. | verdadero |
| rolID      | entero | ID del rol que será modificado.                                            |    sí     |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio.            |   falso   |

## Ejemplo(s)

Esto eliminará un rol dado de ti (el rol debe estar por debajo del rol más alto del bot):

```javascript
bot.command({
    name: 'removeRole',
    code: `
   $removeRole[$guildID;$authorID;roleID;Some reason.]`
});
```