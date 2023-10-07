---
title: $userCustomStatus
description: $userCustomStatus will return a user's custom status.
id: userCustomStatus
---

`$userCustomStatus` will return a user's custom status.

## Usage

```php
$userCustomStatus[guildID?;userID?;option?]
```

## Parameters

| Field    | Type    | Description                                                                                                                               | Required |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| guildID? | integer | The role ID.                                                                                                                              |  false   |
| userID?  | integer | The user ID.                                                                                                                              |  false   |
| option?  | string  | Which part of the status will be returned <br /> 1. **state** (default) - returns the status text <br /> 2. **emoji** - returns the emoji |  false   |

## Example(s)

This will return your status text if you have any:

```javascript
client.command({
  name: "userCustomStatus",
  code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
