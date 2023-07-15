---
title: '$userAvatar'
description: '$userAvatar will return the profile picture of a specific user.'
id: userAvatar
---

`$userAvatar` will return the profile picture of a specific user.

## Usage

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## Parameters

| Field    | Type           | Description                                     | Required |
| -------- | -------------- | ----------------------------------------------- |:--------:|
| userID?  | integer        | The ID of the user.                             |  false   |
| size?    | string, number | The size of the image                           |  false   |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | string         | The format of the returned image.               |  false   |

## Example(s)

This will return your profile picture:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
