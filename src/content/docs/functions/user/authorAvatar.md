---
title: $authorAvatar
description: $authorAvatar will return the profile picture of the command author.
id: authorAvatar
---

`$authorAvatar` will return the profile picture of the command author.

## Usage

```aoi
$authorAvatar[size?;dynamic?;format?]
```

## Parameters

| Field    | Type                                                                                                                                                                                                 | Description                               | Required |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| size?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The size of the image                     |  false   |
| dynamic? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The format of the returned image.         |  false   |

## Example(s)

This will return your profile picture:

```javascript
client.command({
    name: "authorAvatar",
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
