---
title: '$removeRoles'
description: '$removeRoles will remove one or multiple roles from a given member.'
id: removeRoles
---

`$removeRoles` will remove one or multiple roles from a given member.

## Modo de uso

```php
$removeRoles[guildID;userID;reason?;...roleIDs]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | The guild ID of where the user and role is located in.          | verdadero |
| usarioID   | entero | The ID of the user whose role will be removed.                  | verdadero |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |
| ...roleIDs | entero | The IDs of the roles that will be removed.                      |    sí     |

## Ejemplo(s)

This will remove given roles from yourself (the roles must be below the bot's highest role):

```javascript
bot.command({
    name: 'removeRoles',
    code: `
   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`
});
```