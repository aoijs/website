---
title: $giveRole
description: $giveRole will give an specific user a specific role.
id: giveRole
---

`$giveRole` will give an specific user a specific role.

## Usage

```php
$giveRole[guildID;userID;roleID]
```

## Parameters

| Field   | Type    | Description                                        | Required |
| ------- | ------- | -------------------------------------------------- | :------: |
| guildID | integer | Of which guild the member should receive roles of. |   true   |
| userID  | integer | The user ID of the guild member.                   |   true   |
| roleID  | integer | The ID of the role to give.                        |   true   |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Example(s)

This will assign you a role called "Admin" (if present):

```javascript
bot.command({
    name: 'giveRole',
    code: `
  $giveRole[$guildID;$authorID;$findRole[Admin]]
  `
});
```