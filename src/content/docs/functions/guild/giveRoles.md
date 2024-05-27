---
title: $giveRoles
description: $giveRoles will give an specific user multiple or one specific role(s).
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## Usage

```aoi
$giveRoles[guildID;userID;reason?;...roles]
```

## Parameters

| Field   | Type                                                                                              | Description                                                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Of which guild the member should receive roles of.           |   true   |
| userID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID of the guild member.                             |   true   |
| reason? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs. |  false   |
| roles   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The IDs of the roles to give.                                |   true   |

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
