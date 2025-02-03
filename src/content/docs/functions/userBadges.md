---
title: $userBadges
description: $userBadges will return the given user's badges.
id: userBadges
---

`$userBadges` will return the given user's badges.

## Usage

```aoi
$userBadges[userID?;sep?]
```

## Parameters

| Field   | Type                                                                                              | Description                                                            | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | :------: |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user you want the badges of.                             |  false   |
| sep?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to split multiple badges from each other <br /> `` (default) |  false   |

## Example(s)

This will return your Discord Badges separated by a comma:

```javascript
client.command({
    name: "userBadges",
    code: `
  $userBadges[$authorID;, ]
  `
});
```
