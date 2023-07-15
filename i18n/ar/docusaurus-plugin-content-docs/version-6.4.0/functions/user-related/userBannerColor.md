---
title: '$userBannerColor'
description: '$userBannerColor will return the profile banner color.'
id: userBannerColor
---

`$userBannerColor` will return the profile banner color.

## الاستخدام

```php
$userBannerColor[userID?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين    | مطلوب |
| ------- | ------- | --------------- |:-----:|
| userID? | Integer | اي دي المستخدم. | false |

## مثال

This will return your profile banner color (if any):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
