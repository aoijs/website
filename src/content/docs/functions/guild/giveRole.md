---
title: $giveRole
description: $giveRole will give an specific user a specific role.
id: giveRole
---

`$giveRole` will give an specific user a specific role.

## Usage

```php
$giveRole[guildID;userID;roleID;reason?]
```

## Parameters

| Field   | Type                                                                                              | Description                                                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Of which guild the member should receive roles of.           |   true   |
| userID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID of the guild member.                             |   true   |
| roleID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the role to give.                                  |   true   |
| reason? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs. |  false   |

Please note that the bots **highest** role must be above the role you're trying to assign.

## Example(s)

This will assign you a role called "Admin" (if present):

```javascript
client.command({
  name: "giveRole",
  code: `
  $giveRole[$guildID;$authorID;$findRole[Admin];Some reason.]
  `
});
```
