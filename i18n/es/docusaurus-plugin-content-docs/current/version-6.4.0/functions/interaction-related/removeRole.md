---
title: '$removeRole'
description: '$removeRole will remove a given role from a given member.'
id: removeRole
---

`$removeRole` will remove a given role from a given member.

## Modo de uso

```php
$removeRole[guildID;userID;roleID;reason?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | The guild ID of where the user and role is located in.          | verdadero |
| usarioID   | entero | The ID of the user whose role will be removed.                  | verdadero |
| roleID     | entero | The ID of the role that will be removed.                        |    sí     |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |

## Ejemplo(s)

This will remove a given role from yourself (the role must be below the bot's highest role):

```javascript
bot.command({
    name: 'removeRole',
    code: `
   $removeRole[$guildID;$authorID;roleID;Some reason.]`
});
```