---
title: '$isCustomEmoji'
description: '$isCustomEmoji will check if the given emoji is a custom emoji or not.'
id: isCustomEmoji
---

`$isCustomEmoji` will check if the given emoji is a custom emoji or not.

## الاستخدام

```php
$isCustomEmoji[emojiResolver;guildID?]
```

## البارامترات

| Field         | النوع   | الديسكبربشين                                     | مطلوب |
| ------------- | ------- | ------------------------------------------------ |:-----:|
| emojiResolver | string  | Emoji you want to check if it is a custom emoji. | true  |
| guildID?      | Integer | ID of the guild where the emoji was created in.  | false |

## مثال

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji is indeed a custom emoji:

```javascript
bot.command({
    name: 'isCustomEmoji',
    code: `
  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]
  `
});
```
