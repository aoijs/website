---
title: '$deleteRoles'
description: '$deleteRoles will delete one or multiple roles.'
id: deleteRoles
---

`$deleteRoles` will delete one or multiple roles.

## Modo de uso

```php
$deleteRoles[guildID;...roles]
```

## Parámetros

| Campo      | Tipo            | Parámetros                                      | Requerido |
| ---------- | --------------- | ----------------------------------------------- |:---------:|
| servidorID | entero          | The guild ID of where the roles are located in. | verdadero |
| ...roles   | integer, string | The Ids of the roles.                           | verdadero |

## Ejemplo(s)

This will delete roles of your guilds ( make sure to add actual IDs ):

```javascript
bot.command({
    name: 'deleteRoles',
    code: `
  Deleted three roles!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```