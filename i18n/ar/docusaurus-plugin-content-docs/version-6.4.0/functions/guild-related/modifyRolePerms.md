---
title: '$modifyRolePerms'
description: '$modifyRolePerms will modify a given role''s permissions.'
id: modifyRolePerms
---

`$modifyRolePerms` will modify a given role's permissions.

## الاستخدام

```php
$modifyRolePerms[guildID;roleID;...perms]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                             | مطلوب |
| -------- | ------- | ---------------------------------------------------------------------------------------- |:-----:|
| guildID  | Integer | The guild ID of where the role is located in.                                            | true  |
| roleID   | Integer | Role ID of the role which will be modified. / `$guildID` represents the `@everyone` role | true  |
| ...perms | string  | Permissions to modify.                                                                   | true  |

|     | الديسكبربشين                                         |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/Client/2permissionsintents.md)__.

## مثال

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