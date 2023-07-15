---
title: '$addEmoji'
description: '$addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.'
id: addEmoji
---

`$addEmoji` will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.

## الاستخدام

```php
$addEmoji[guildID;URL;name;returnEmoji?;reason?;...roles?]
```

## البارامترات

| Field        | النوع   | الديسكبربشين                                             | مطلوب |
| ------------ | ------- | -------------------------------------------------------- |:-----:|
| guildID      | Integer | guild ID                                                 | true  |
| URL          | string  | valid image URL                                          | true  |
| name         | string  | emoji name                                               | true  |
| returnEmoji? | string  | return the created emoji?                                | false |
| reason?      | string  | reason which will be displayed in the guild's audit logs | false |
| roles?       | Integer | which roles will be able to use the given emoji          | false |

## مثال

This will create an emoji:

```javascript
bot.command({
    name: 'addEmoji',
    code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `
});
```
