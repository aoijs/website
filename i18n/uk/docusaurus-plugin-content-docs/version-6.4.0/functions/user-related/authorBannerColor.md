---
title: '$authorBannerColor'
description: '$authorBannerColor will return the profile banner color of the command author.'
id: authorBannerColor
---

`$authorBannerColor` will return the profile banner color of the command author.

## Використання

```php
$authorBannerColor
```

## Приклад(и)

This will return your profile banner color (if any):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $authorBannerColor
  `
});
```
