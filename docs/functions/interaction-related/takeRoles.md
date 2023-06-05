---
title: $takeRoles
description: $takeRoles will remove one or multiple roles from a given member.
id: takeRoles
---

`$takeRoles` will remove one or multiple roles from a given member.

## Usage

```php
$takeRoles[guildID;userID;...roleIDs]
```

## Parameters

| Field      | Type    | Description                                            | Required |
| ---------- | ------- | ------------------------------------------------------ | :------: |
| guildID    | integer | The guild ID of where the user and role is located in. |   true   |
| userID     | integer | The ID of the user whose role will be removed.         |   true   |
| ...roleIDs | integer | The IDs of the roles that will be removed.             |   true   |

## Example(s)

This will remove given roles from yourself (the roles must be below the bot's highest role):

```javascript
bot.command({
    name: 'takeRoles',
    code: `
   $takeRoles[$guildID;$authorID;roleID;roleID;...]`
});
```