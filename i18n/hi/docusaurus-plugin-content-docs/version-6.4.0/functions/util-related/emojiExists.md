---
title: '$emojiExists'
description: '$emojiExists will check if the given emoji exists.'
id: emojiExists
---

`$emojiExists` will check if the given emoji exists.

## प्रोयोग

```php
$emojiExists[emojiResolver]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन                          | चाहिए |
| ------------- | -------- | ------------------------------------- |:-----:|
| emojiResolver | स्ट्रिंग | Emoji you want to check if it exists. | true  |

## ट्रू (हा)

This will return `true` as the ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) emoji exists:

```javascript
bot.command({
    name: 'emojiExists',
    code: `
  $emojiExists[<:LerefMoney:1003365344724910191>]
  `
});
```
