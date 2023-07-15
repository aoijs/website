---
title: '$giveRoles'
description: '$giveRoles will give an specific user multiple or one specific role(s).'
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## Modo de uso

```php
$giveRoles[guildID;userID;reason?;...roles]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                      | Requerido |
| ---------- | ------ | --------------------------------------------------------------- |:---------:|
| servidorID | entero | Of which guild the member should receive roles of.              | verdadero |
| usarioID   | entero | The user ID of the guild member.                                | verdadero |
| ¿razón?    | string | razón que se mostrará en los registros de auditoría del gremio. |   falso   |
| roles      | entero | The IDs of the roles to give.                                   |    sí     |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Ejemplo(s)

This will assign you two role called "Admin" and "Moderator" (if present):

```javascript
bot.command({
    name: 'giveRoles',
    code: `
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[Admin];$findRole[Moderator]]
  `
});
```