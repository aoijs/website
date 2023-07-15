---
title: '$giveRole'
description: '$giveRole will give an specific user a specific role.'
id: giveRole
---

`$giveRole` will give an specific user a specific role.

## Modo de uso

```php
$giveRole[guildID;userID;roleID;reason?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | Of which guild the member should receive roles of.              | verdadero |
| usarioID   | entero | The user ID of the guild member.                                | verdadero |
| roleID     | entero | The ID of the role to give.                                     |    sí     |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Ejemplo(s)

This will assign you a role called "Admin" (if present):

```javascript
bot.command({
    name: 'giveRole',
    code: `
  $giveRole[$guildID;$authorID;$findRole[Admin];Some reason.]
  `
});
```