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

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- | :------: |
| userID?  | integer | The user ID.  |  false   |
| guildID? | integer | The guild ID. |  false   |

## Example(s)

This will return the Color of your highest role:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
