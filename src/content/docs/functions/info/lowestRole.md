---
title: $userLowestRole
description: $userLowestRole will return the lowest role of a specific user.
id: userLowestRole
---

`$userLowestRole` will return the lowest role of a specific user.

## Usage

```php
$userLowestRole[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                                | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the user you want the lowest role to be returned of. |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild.                                       |  false   |

## Example(s)

This will return the ID of your lowest role:

```javascript
client.command({
  name: "userLowestRole",
  code: `
  $userLowestRole[$authorID;$guildID]
  `
});
```
