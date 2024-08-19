---
title: $userExists
description: $userExists will check if a given user exists.
id: userExists
---

`$userExists` will check if a given user exists.

## Usage

```aoi
$userExists[userID?]
```

## Parameters

| Field   | Type                                                                                              | Description  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------ | :------: |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID. |  false   |

## Example(s)

This will return either `true` or `false` depending on if the user exists, in this example below it will return `true` as you exist as Discord user:

```javascript
client.command({
    name: "userExists",
    code: `
  $userExists[$authorID]
  `
});
```
