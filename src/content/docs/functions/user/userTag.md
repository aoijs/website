---
title: $userTag
description: $userTag will return a user's username and discriminator.
id: userTag
---

`$userTag` will return a user's username and discriminator.

## Usage

```aoi
$userTag[userID?]
```

## Parameters

| Field   | Type                                                                                              | Description  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------ | :------: |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The user ID. |  false   |

## Example(s)

This will return your username and discriminator:

```javascript
client.command({
    name: "userTag",
    code: `
  $userTag[$authorID]
  `
});
```
