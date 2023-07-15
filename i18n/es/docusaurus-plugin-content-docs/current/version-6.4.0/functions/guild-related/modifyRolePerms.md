---
title: '$modifyRolePerms'
description: '$modifyRolePerms will modify a given role''s permissions.'
id: modifyRolePerms
---

`$modifyRolePerms` will modify a given role's permissions.

## Modo de uso

```php
$modifyRolePerms[guildID;roleID;...perms]
```

## Parámetros

| Campo       | Tipo   | Descripción                                                                              | Requerido |
| ----------- | ------ | ---------------------------------------------------------------------------------------- |:---------:|
| guildID     | entero | The guild ID of where the role is located in.                                            |    sí     |
| roleID      | entero | Role ID of the role which will be modified. / `$guildID` represents the `@everyone` role |    sí     |
| ...permisos | cadena | Permissions to modify.                                                                   |    sí     |

|     | Descripción                                          |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

Encontrará todos los permisos __[aquí](../../guides/client/2permissionsintents.md)__.

## Ejemplo(s)

This will edit a existing role's permission and allow the "@everyone" role to send messages and add reactions.

```javascript
bot.command({
    name: 'modifyRolePerms',
    code: `
  $modifyRolePerms[$guildID;$guildID;+sendmessages;+addreactions]"
  }]
  `
});
```