---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji will check if the given emoji is an unicode emoji.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` will check if the given emoji is an unicode emoji.

## प्रोयोग

```php
$isUnicodeEmoji[emojiResolver]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन   | चाहिए |
| ------------- | -------- | -------------- |:-----:|
| emojiResolver | स्ट्रिंग | Unicode emoji. | true  |

## ट्रू (हा)

This will return `true` as "🤓" is an valid unicode emoji:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
