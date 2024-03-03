---
title: $userAvatar
description: $userAvatar will return the profile picture of a specific user.
id: userAvatar
---

`$userAvatar` will return the profile picture of a specific user.

## Usage

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## Parameters

| Field    | Type                                                                                                                                                                                                 | Description                               | Required |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The ID of the user.                       |  false   |
| size?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The size of the image                     |  false   |
| dynamic? | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | The format of the returned image.         |  false   |

## Example(s)

This will return your profile picture:

```javascript
client.command({
  name: "userAvatar",
  code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
