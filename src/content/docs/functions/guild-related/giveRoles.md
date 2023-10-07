---
title: $giveRoles
description: $giveRoles will give an specific user multiple or one specific role(s).
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## Usage

```php
$giveRoles[guildID;userID;reason?;...roles]
```

## Parameters

| Field   | Type    | Description                                                  | Required |
| ------- | ------- | ------------------------------------------------------------ | :------: |
| guildID | integer | Of which guild the member should receive roles of.           |   true   |
| userID  | integer | The user ID of the guild member.                             |   true   |
| reason? | string  | The reason that will be displayed in the guild's audit logs. |  false   |
| roles   | integer | The IDs of the roles to give.                                |   true   |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Example(s)

This will assign you two role called "Admin" and "Moderator" (if present):

```javascript
client.command({
  name: "giveRoles",
  code: `
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[Admin];$findRole[Moderator]]
  `
});
```
