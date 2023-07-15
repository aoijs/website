---
title: '$userBannerColor'
description: '$userBannerColor will return the profile banner color.'
id: userBannerColor
---

`$userBannerColor` will return the profile banner color.

## Використання

```php
$userBannerColor[userID?]
```

## Параметри

| Поле    | Тип     | Опис                | Обов'язковий |
| ------- | ------- | ------------------- |:------------:|
| userID? | integer | The ID of the user. |      ні      |

## Приклад(и)

This will return your profile banner color (if any):

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBannerColor[$authorID]
  `
});
```
