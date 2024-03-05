---
title: $userDisplayName
description: $userDisplayName will return the display name of a given user.
id: userDisplayName
---

`$userDisplayName` will return the display name of a given user.

## Usage

```php
$userDisplayName[userID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return your display name, if you have none then it'll return your Discord username:

```javascript
client.command({
  name: "userDisplayName",
  code: `
  $userDisplayName[$authorID]
  `
});
```
