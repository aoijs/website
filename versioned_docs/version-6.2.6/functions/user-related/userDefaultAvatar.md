---
title: $userDefaultAvatar
description: $userDefaultAvatar will return the given user's default Discord User Avatar.
id: userDefaultAvatar
---

`$userDefaultAvatar` will return the given user's default Discord User Avatar.

## Usage

```php
$userDefaultAvatar[userID?;size?;dynamic?;format?]
```

## Parameters

| Field    | Type           | Description                               | Required |
| -------- | -------------- | ----------------------------------------- | :------: |
| userID?  | integer        | The ID of the user.                       |  false   |
| size?    | string, number | The size of the image                     |  false   |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |  false   |
| format?  | string         | The format of the returned image.         |  false   |

## Example(s)

This will return your default Discord User Avatar:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID;2048;true;webp]
  `
});
```
