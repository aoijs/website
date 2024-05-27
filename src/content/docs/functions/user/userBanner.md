---
title: $userBanner
description: $userBanner will return the profile banner of a specific user.
id: userBanner
---

`$userBanner` will return the profile banner of a specific user.

## Usage

```aoi
$userBanner[userID?;size?;dynamic?;extension?]
```

## Parameters

| Field      | Type                                                                                                                                                                                                 | Description                               | Required |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| userID?    | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the user.                       |  false   |
| size?      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The size of the image.                    |  false   |
| dynamic?   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The format of the returned image.         |  false   |

## Example(s)

This will return your profile banner:

```javascript
client.command({
    name: "userBanner",
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```
