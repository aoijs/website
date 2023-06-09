---
title: $takeRole
description: $takeRole will remove a given role from a given member.
id: takeRole
---

`$takeRole` will remove a given role from a given member.

## Usage

```php
$takeRole[guildID;userID;roleID]
```

## Parameters

| Field   | Type    | Description                                            | Required |
| ------- | ------- | ------------------------------------------------------ | :------: |
| guildID | integer | The guild ID of where the user and role is located in. |   true   |
| userID  | integer | The ID of the user whose role will be removed.         |   true   |
| roleID  | integer | The ID of the role that will be removed.               |   true   |

## Example(s)

This will remove a given role from yourself (the role must be below the bot's highest role):

```javascript
bot.command({
    name: 'takeRole',
    code: `
   $takeRole[$guildID;$authorID;roleID]`
});
```