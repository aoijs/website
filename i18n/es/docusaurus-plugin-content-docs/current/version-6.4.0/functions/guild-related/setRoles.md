---
title: '$setRoles'
description: '$setRoles will set a member''s roles.'
id: setRoles
---

`$setRoles` will set a member's roles.

## Modo de uso

```php
$setRoles[guildID;memberID;reason?;...roleIDs]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                          | Requerido |
| ---------- | ------ | ------------------------------------------------------------------- |:---------:|
| servidorID | entero | The ID of the guild where the users roles will be removed or added. | verdadero |
| memberID   | entero | The user ID of the guild member.                                    | verdadero |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio.     |   falso   |
| ...roleIDs | entero | The Ids of the roles.                                               |    sí     |

## Ejemplo(s)

This will either remove or add specific roles from you:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```