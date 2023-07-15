---
title: '$userBannerColor'
description: '$userBannerColor will return the profile banner color.'
id: userBannerColor
---

`$userBannerColor` will return the profile banner color.

## प्रोयोग

```php
$userBannerColor[userID?]
```

## पैरामीटर्स

| फील्ड   | टाइप    | डिस्क्रिप्शन        |    चाहिए     |
| ------- | ------- | ------------------- |:------------:|
| userID? | integer | The ID of the user. | असत्य (नहीं) |

## ट्रू (हा)

This will return your profile banner color (if any):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
