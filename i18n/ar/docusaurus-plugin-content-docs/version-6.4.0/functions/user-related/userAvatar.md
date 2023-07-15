---
title: '$userAvatar'
description: '$userAvatar will return the profile picture of a specific user.'
id: userAvatar
---

`$userAvatar` will return the profile picture of a specific user.

## الاستخدام

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## البارامترات

| Field    | النوع          | الديسكبربشين                                    | مطلوب |
| -------- | -------------- | ----------------------------------------------- |:-----:|
| userID?  | Integer        | اي دي المستخدم.                                 | false |
| size?    | string, number | The size of the image                           | false |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** | false |
| format?  | string         | The format of the returned image.               | false |

## مثال

This will return your profile picture:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
