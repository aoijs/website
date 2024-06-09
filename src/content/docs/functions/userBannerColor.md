---
title: $userBannerColor
description: $userBannerColor will return the profile banner color.
id: userBannerColor
---

`$userBannerColor` will return the profile banner color.

## Usage

```aoi
$userBannerColor[userID?]
```

## Parameters

| Field   | Type                                                                                              | Description         | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| userID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user. |  false   |

## Example(s)

This will return your profile banner color (if any):

```javascript
client.command({
    name: "userBanner",
    code: `
  $userBannerColor[$authorID]
  `
});
```
