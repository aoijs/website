---
title: '$authorBannerColor'
description: '$authorBannerColor will return the profile banner color of the command author.'
id: authorBannerColor
---

`$authorBannerColor` will return the profile banner color of the command author.

## الاستخدام

```php
$authorBannerColor
```

## مثال

This will return your profile banner color (if any):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $authorBannerColor
  `
});
```
