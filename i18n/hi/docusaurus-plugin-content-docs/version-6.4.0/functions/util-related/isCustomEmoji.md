---
title: '$isCustomEmoji'
description: '$isCustomEmoji will check if the given emoji is a custom emoji or not.'
id: isCustomEmoji
---

`$isCustomEmoji` will check if the given emoji is a custom emoji or not.

## प्रोयोग

```php
$isCustomEmoji[emojiResolver;guildID?]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन                                     |    चाहिए     |
| ------------- | -------- | ------------------------------------------------ |:------------:|
| emojiResolver | स्ट्रिंग | Emoji you want to check if it is a custom emoji. |     true     |
| guildID?      | integer  | ID of the guild where the emoji was created in.  | असत्य (नहीं) |

## ट्रू (हा)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji is indeed a custom emoji:

```javascript
bot.command({
    name: 'isCustomEmoji',
    code: `
  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]
  `
});
```
