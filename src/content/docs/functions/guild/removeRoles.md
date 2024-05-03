---
title: $removeRoles
description: $removeRoles will remove one or multiple roles from a given member.
id: removeRoles
---

`$removeRoles` will remove one or multiple roles from a given member.

## Usage

```php
$removeRoles[guildID;userID;reason?;...roleIDs]
```

## Parameters

| Field      | Type                                                                                              | Description                                                  | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| guildID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of where the user and role is located in.       |   true   |
| userID     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user whose role will be removed.               |   true   |
| reason?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs. |  false   |
| ...roleIDs | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The IDs of the roles that will be removed.                   |   true   |

## Example(s)

This will remove given roles from yourself (the roles must be below the bot's highest role):

```javascript
client.command({
    name: "removeRoles",
    code: `
   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`
});
```
