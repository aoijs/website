---
title: '$emojiCount'
description: '$emojiCount will return the emoji count of a guild.'
id: emojiCount
---

`$emojiCount` will return the emoji count of a guild.

## الاستخدام

```php
$emojiCount[guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                           | مطلوب |
| -------- | ------- | ------------------------------------------------------ |:-----:|
| guildID? | Integer | From where the emojis will be counted and returned of. | false |

## مثال

This will return the emoji count of your guild:

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  You have $emojiCount emojis in your guild!
  `
});
```