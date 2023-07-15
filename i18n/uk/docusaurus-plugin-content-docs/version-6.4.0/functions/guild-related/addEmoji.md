---
title: '$addEmoji'
description: '$addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.'
id: addEmoji
---

`$addEmoji` will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.

## Використання

```php
$addEmoji[guildID;URL;name;returnEmoji?;reason?;...roles?]
```

## Параметри

| Поле         | Тип     | Опис                                                     | Обов'язковий |
| ------------ | ------- | -------------------------------------------------------- |:------------:|
| guildID      | integer | guild ID                                                 |     так      |
| URL          | рядок   | valid image URL                                          |     так      |
| назва        | рядок   | emoji name                                               |     так      |
| returnEmoji? | рядок   | return the created emoji?                                |      ні      |
| reason?      | рядок   | reason which will be displayed in the guild's audit logs |      ні      |
| roles?       | integer | which roles will be able to use the given emoji          |      ні      |

## Приклад(и)

This will create an emoji:

```javascript
bot.command({
    name: 'addEmoji',
    code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `
});
```
