---
title: '$userAvatar'
description: '$userAvatar will return the profile picture of a specific user.'
id: userAvatar
---

`$userAvatar` will return the profile picture of a specific user.

## प्रोयोग

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## पैरामीटर्स

| फील्ड    | टाइप           | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | -------------- | ----------------------------------------------- |:------------:|
| userID?  | integer        | The ID of the user.                             | असत्य (नहीं) |
| size?    | string, number | The size of the image                           | असत्य (नहीं) |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** | असत्य (नहीं) |
| format?  | स्ट्रिंग       | The format of the returned image.               | असत्य (नहीं) |

## ट्रू (हा)

This will return your profile picture:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
