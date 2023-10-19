---
title: $userRolesCount
description: $userRolesCount will return a user's role count.
id: userRolesCount
---

`$userRolesCount` will return a user's role count.

## Usage

```php
$userRolesCount[userID?;guildID?]
```

## Parameters

| Field    | Type                                                                                                | Description   | Required |
| -------- | --------------------------------------------------------------------------------------------------- | ------------- | :------: |
| userID?  | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The user ID.  |  false   |
| guildID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | The guild ID. |  false   |

## Example(s)

This will return the amount of roles you have assigned:

```javascript
client.command({
  name: "userRolesCount",
  code: `
  $userRolesCount[$authorID;$guildID]
  `,
});
```
