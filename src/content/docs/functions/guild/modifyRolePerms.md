---
title: $modifyRolePerms
description: $modifyRolePerms will modify a given role's permissions.
id: modifyRolePerms
---

`$modifyRolePerms` will modify a given role's permissions.

## Usage

```php
$modifyRolePerms[guildID;roleID;...perms]
```

## Parameters

| Field    | Type                                                                                              | Description                                                                              | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | :------: |
| guildID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of where the role is located in.                                            |   true   |
| roleID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Role ID of the role which will be modified. / `$guildID` represents the `@everyone` role |   true   |
| ...perms | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Permissions to modify.                                                                   |   true   |

|     | Description                                          |
| --- | ---------------------------------------------------- |
| `-` | Deny a specific permission to someone or something.  |
| `+` | Allow a specific permission to someone or something. |
| `/` | Reset a specific permission to its default state.    |

You can find all permissions **[here](/guides/client/permissions/)**.

## Example(s)

This will edit a existing role's permission and allow the "@everyone" role to send messages and add reactions.

```javascript
client.command({
  name: "modifyRolePerms",
  code: `
  $modifyRolePerms[$guildID;$guildID;+sendmessages;+addreactions]"
  }]
  `
});
```
