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

| Field      | Type                                                                                              | Description                                                         | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| guildID    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where the users roles will be removed or added. |   true   |
| memberID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID of the guild member.                                    |   true   |
| reason?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs.        |  false   |
| ...roleIDs | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The Ids of the roles.                                               |   true   |

## Example(s)

This will either remove or add specific roles from you:

```javascript
client.command({
  name: "setRoles",
  code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```
