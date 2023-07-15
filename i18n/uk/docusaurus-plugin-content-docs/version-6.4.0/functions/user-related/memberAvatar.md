---
title: '$memberAvatar'
description: '$memberAvatar will return the profile picture of a guild member.'
id: memberAvatar
---

`$memberAvatar` will return the profile picture of a guild member.

## Використання

```php
$memberAvatar[guildID?;userID?;size?;dynamic?;format?]
```

## Параметри

| Поле     | Тип     | Опис                                            | Обов'язковий |
| -------- | ------- | ----------------------------------------------- |:------------:|
| guildID? | integer | The ID of the guild.                            |      ні      |
| userID?  | integer | The ID of the user.                             |      ні      |
| size?    | integer | The size of the image.                          |      ні      |
| dynamic? | boolean | 1. **true** (default) <br /> 2. **false** |      ні      |
| format?  | рядок   | Image format.                                   |      ні      |

## Приклад(и)

This will return your profile picture:

```javascript
bot.command({
    name: 'memberAvatar',
    code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
