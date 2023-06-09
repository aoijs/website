---
title: $giveRoles
description: $giveRoles will give an specific user multiple or one specific role(s).
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## Usage

```php
$giveRoles[guildID;userID;...roles]
```

## Parameters

| Field   | Type    | Description                                        | Required |
| ------- | ------- | -------------------------------------------------- | :------: |
| guildID | integer | Of which guild the member should receive roles of. |   true   |
| userID  | integer | The user ID of the guild member.                   |   true   |
| roles   | integer | The IDs of the roles to give.                      |   true   |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Example(s)

This will assign you two role called "Admin" and "Moderator" (if present):

```javascript
bot.command({
    name: 'giveRoles',
    code: `
  $giveRoles[$guildID;$authorID;$findRole[Admin];$findRole[Moderator]]
  `
});
```