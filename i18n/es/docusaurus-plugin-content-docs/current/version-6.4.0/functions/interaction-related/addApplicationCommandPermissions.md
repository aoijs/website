---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions will change permissions of a slash command.'
id: addApplicationCommandPermissions
---

## Modo de uso

```php
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## Parámetros

| Campo          | Tipo            | Parámetros                                                                              | Requerido |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:---------:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | verdadero |
| id             | entero          | Application command ID.                                                                 | verdadero |
| ...permisos    | string          | Permissions.                                                                            |    sí     |

## Ejemplo(s)

This will disable the slash command for everyone in the guild ( make sure to replace "ID" with the actual slash command ID ):

```javascript
bot.command({
    name: 'addApplicationCommandPermissions',
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
