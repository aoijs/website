---
title: '$modifyRolePerms'
description: '$modifyRolePerms will modify a given role''s permissions.'
id: modifyRolePerms
---

`$modifyRolePerms` will modify a given role's permissions.

## प्रोयोग

```php
$modifyRolePerms[guildID;roleID;...perms]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                             | चाहिए |
| -------- | -------- | ---------------------------------------------------------------------------------------- |:-----:|
| guildID  | integer  | The guild ID of where the role is located in.                                            | true  |
| roleID   | integer  | Role ID of the role which will be modified. / `$guildID` represents the `@everyone` role | true  |
| ...perms | स्ट्रिंग | Permissions to modify.                                                                   | true  |

|     | डिस्क्रिप्शन                                         |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions __[here](../../guides/client/2permissionsintents.md)__.

## ट्रू (हा)

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