---
title: '$userAvatar'
description: '$userAvatar will return the profile picture of a specific user.'
id: userAvatar
---

`$userAvatar` will return the profile picture of a specific user.

## Використання

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## Параметри

| Поле     | Тип            | Опис                                            | Обов'язковий |
| -------- | -------------- | ----------------------------------------------- |:------------:|
| userID?  | integer        | The ID of the user.                             |      ні      |
| size?    | string, number | The size of the image                           |      ні      |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |      ні      |
| format?  | рядок          | The format of the returned image.               |      ні      |

## Приклад(и)

This will return your profile picture:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
