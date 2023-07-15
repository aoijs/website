---
title: '$authorAvatar'
description: '$authorAvatar will return the profile picture of the command author.'
id: authorAvatar
---

`$authorAvatar` will return the profile picture of the command author.

## Використання

```php
$authorAvatar[size?;dynamic?;format?]
```

## Параметри

| Поле     | Тип            | Опис                                            | Обов'язковий |
| -------- | -------------- | ----------------------------------------------- |:------------:|
| size?    | string, number | The size of the image                           |      ні      |
| dynamic? | boolean        | 1. **true** (default) <br /> 2. **false** |      ні      |
| format?  | рядок          | The format of the returned image.               |      ні      |

## Приклад(и)

This will return your profile picture:

```javascript
bot.command({
    name: 'authorAvatar',
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
