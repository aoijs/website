---
title: '$guildEmojiExists'
description: '$guildEmojiExists will check if the given emoji exists in the given guild.'
id: guildEmojiExists
---

`$guildEmojiExists` will check if the given emoji exists in the given guild.

## प्रोयोग

```php
$guildEmojiExists[emojiResolver;guildId?]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन                            |    चाहिए     |
| ------------- | -------- | --------------------------------------- |:------------:|
| emojiResolver | स्ट्रिंग | Emoji you want to check if it exists.   |     true     |
| guildID?      | integer  | ID of the guild where the emoji exists. | असत्य (नहीं) |

## ट्रू (हा)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji exists:

```javascript
bot.command({
    name: 'guildEmojiExists',
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
