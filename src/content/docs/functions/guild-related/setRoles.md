---
title: $setRoles
description: $setRoles will set a member's roles.
id: setRoles
---

`$setRoles` will set a member's roles.

## Usage

```php
$setRoles[guildID;memberID;reason?;...roleIDs]
```

## Parameters

| Field      | Type    | Description                                                         | Required |
| ---------- | ------- | ------------------------------------------------------------------- | :------: |
| guildID    | integer | The ID of the guild where the users roles will be removed or added. |   true   |
| memberID   | integer | The user ID of the guild member.                                    |   true   |
| reason?    | string  | The reason that will be displayed in the guild's audit logs.        |  false   |
| ...roleIDs | integer | The Ids of the roles.                                               |   true   |

## Example(s)

This will either remove or add specific roles from you:

```javascript
bot.command({
  name: "setRoles",
  code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`,
});
```
