---
title: $userRoleColor
description: $userRoleColor will return the role color of a user's highest assigned role.
id: userRoleColor
---

`$userRoleColor` will return the role color of a user's highest assigned role.

## Usage

```php
$userRoleColor[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID.  |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |

## Example(s)

This will return the Color of your highest role:

```javascript
client.command({
    name: "userRoleColor",
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
