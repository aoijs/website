---
title: $userID
description: $userID will return a given user's ID.
id: userID
---

`$userID` will return a given user's ID.

## Usage

```aoi
$userID[user]
```

## Parameters

| Field | Type                                                                                                                                                                                                 | Description                                                      | Required |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | :------: |
| user  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The name of the user who you want the user ID to be returned of. |   true   |

## Example(s)

This will return your user ID:

```javascript
client.command({
    name: "userID",
    code: `
  $userID[$username]
  `
});
```
