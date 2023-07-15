---
title: '$addEmoji'
description: '$addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.'
id: addEmoji
---

`$addEmoji` will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.

## प्रोयोग

```php
$addEmoji[guildID;URL;name;returnEmoji?;reason?;...roles?]
```

## पैरामीटर्स

| फील्ड        | टाइप     | डिस्क्रिप्शन                                             |    चाहिए     |
| ------------ | -------- | -------------------------------------------------------- |:------------:|
| guildID      | integer  | guild ID                                                 |     true     |
| URL          | स्ट्रिंग | valid image URL                                          |     true     |
| name         | स्ट्रिंग | emoji name                                               |     true     |
| returnEmoji? | स्ट्रिंग | return the created emoji?                                | असत्य (नहीं) |
| reason?      | स्ट्रिंग | reason which will be displayed in the guild's audit logs | असत्य (नहीं) |
| roles?       | integer  | which roles will be able to use the given emoji          | असत्य (नहीं) |

## ट्रू (हा)

This will create an emoji:

```javascript
bot.command({
    name: 'addEmoji',
    code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `
});
```
