---
title: '$userBanner'
description: '$userBanner will return the profile banner of a specific user.'
id: userBanner
---

`$userBanner` will return the profile banner of a specific user.

## Використання

```php
$userBanner[userID?;size?;dynamic?;format?]
```

## Параметри

| Поле     | Тип            | Опис                                            | Обов'язковий |
| -------- | -------------- | ----------------------------------------------- |:------------:|
| userID?  | integer        | The ID of the user.                             |      ні      |
| size?    | string, number | The size of the image.                          |      ні      |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |      ні      |
| format?  | рядок          | The format of the returned image.               |      ні      |

## Приклад(и)

This will return your profile banner:

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```
