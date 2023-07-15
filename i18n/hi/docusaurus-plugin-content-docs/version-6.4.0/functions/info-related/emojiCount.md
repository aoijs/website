---
title: '$emojiCount'
description: '$emojiCount will return the emoji count of a guild.'
id: emojiCount
---

`$emojiCount` will return the emoji count of a guild.

## प्रोयोग

```php
$emojiCount[guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन                                           |    चाहिए     |
| -------- | ------- | ------------------------------------------------------ |:------------:|
| guildID? | integer | From where the emojis will be counted and returned of. | असत्य (नहीं) |

## ट्रू (हा)

This will return the emoji count of your guild:

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  You have $emojiCount emojis in your guild!
  `
});
```