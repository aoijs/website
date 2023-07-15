---
title: '$setRoles'
description: '$setRoles establecerá los roles de un miembro.'
id: setRoles
---

`$setRoles` establecerá los roles de un miembro.

## Uso

```php
$setRoles[servidorID;Identificación de miembro;razon?;...rolesIDs]
```

## Parámetros

| Campo                     | Tipo   | Parámetros                                                                     | Requerido |
| ------------------------- | ------ | ------------------------------------------------------------------------------ |:---------:|
| servidorID                | entero | El ID de la guild donde los roles de los usuarios serán eliminados o añadidos. | verdadero |
| Identificación de miembro | entero | El ID de usuario del miembro del gremio.                                       | verdadero |
| ¿razón?                   | string | razón que se mostrará en los registros de auditoría del gremio.                |   falso   |
| ...rolesIDs               | entero | Los Ids de los roles.                                                          |    sí     |

## Ejemplo(s)

Esto eliminará o añadirá roles específicos de usted:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```