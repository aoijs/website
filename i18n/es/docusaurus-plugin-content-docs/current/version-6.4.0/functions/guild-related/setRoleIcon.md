---
title: '$setRoleIcon'
description: '$setRoleIcon will set the icon of a specific role.'
id: setRoleIcon
---

`$setRoleIcon` will set the icon of a specific role.

## Modo de uso

```php
$setRoleIcon[guildID;roleID;icon]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                 | Requerido |
| ---------- | ------ | ------------------------------------------ | --------- |
| servidorID | entero | The ID of the guild where the role exists. | no        |
| roleID     | entero | The role ID.                               | no        |
| icon       | string | The URL of the icon.                       | falso     |

## Ejemplo(s)

This will change the icon of a given role to the specified icon:

```javascript
bot.command({
    name: 'setRoleIcon',
    code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```