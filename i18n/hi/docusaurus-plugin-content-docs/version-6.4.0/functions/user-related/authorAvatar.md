---
title: '$authorAvatar'
description: '$authorAvatar will return the profile picture of the command author.'
id: authorAvatar
---

`$authorAvatar` will return the profile picture of the command author.

## प्रोयोग

```php
$authorAvatar[size?;dynamic?;format?]
```

## पैरामीटर्स

| फील्ड    | टाइप           | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | -------------- | ----------------------------------------------- |:------------:|
| size?    | string, number | The size of the image                           | असत्य (नहीं) |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** | असत्य (नहीं) |
| format?  | स्ट्रिंग       | The format of the returned image.               | असत्य (नहीं) |

## ट्रू (हा)

This will return your profile picture:

```javascript
bot.command({
    name: 'authorAvatar',
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
