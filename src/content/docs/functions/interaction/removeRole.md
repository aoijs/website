---
title: $removeRole
description: $removeRole will remove a given role from a given member.
id: removeRole
---

`$removeRole` will remove a given role from a given member.

## Usage

```php
$removeRole[guildID;userID;roleID;reason?]
```

## Parameters

| Field   | Type                                                                                              | Description                                                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID of where the user and role is located in.       |   true   |
| userID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user whose role will be removed.               |   true   |
| roleID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the role that will be removed.                     |   true   |
| reason? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The reason that will be displayed in the guild's audit logs. |  false   |

## Example(s)

This will remove a given role from yourself (the role must be below the bot's highest role):

```javascript
client.command({
  name: "removeRole",
  code: `
   $removeRole[$guildID;$authorID;roleID;Some reason.]`
});
```
