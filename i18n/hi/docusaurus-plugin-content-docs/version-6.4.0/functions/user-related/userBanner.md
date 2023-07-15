---
title: '$userBanner'
description: '$userBanner will return the profile banner of a specific user.'
id: userBanner
---

`$userBanner` will return the profile banner of a specific user.

## प्रोयोग

```php
$userBanner[userID?;size?;dynamic?;format?]
```

## पैरामीटर्स

| फील्ड    | टाइप           | डिस्क्रिप्शन                                    |    चाहिए     |
| -------- | -------------- | ----------------------------------------------- |:------------:|
| userID?  | integer        | The ID of the user.                             | असत्य (नहीं) |
| size?    | string, number | The size of the image.                          | असत्य (नहीं) |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** | असत्य (नहीं) |
| format?  | स्ट्रिंग       | The format of the returned image.               | असत्य (नहीं) |

## ट्रू (हा)

This will return your profile banner:

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```
