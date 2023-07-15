---
title: '$modifyRolePerms'
description: '$modifyRolePerms will modify a given role''s permissions.'
id: modifyRolePerms
---

`$modifyRolePerms` will modify a given role's permissions.

## Використання

```php
$modifyRolePerms[guildID;roleID;...perms]
```

## Параметри

| Поле     | Тип     | Опис                                                                                     | Обов'язковий |
| -------- | ------- | ---------------------------------------------------------------------------------------- |:------------:|
| guildID  | integer | The guild ID of where the role is located in.                                            |     так      |
| roleID   | integer | Role ID of the role which will be modified. / `$guildID` represents the `@everyone` role |     так      |
| ...perms | рядок   | Permissions to modify.                                                                   |     так      |

|     | Опис                                                 |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## Приклад(и)

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