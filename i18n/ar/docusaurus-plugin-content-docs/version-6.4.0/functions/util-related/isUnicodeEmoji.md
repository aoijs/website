---
title: '$isUnicodeEmoji'
description: '$isUnicodeEmoji will check if the given emoji is an unicode emoji.'
id: isUnicodeEmoji
---

`$isUnicodeEmoji` will check if the given emoji is an unicode emoji.

## الاستخدام

```php
$isUnicodeEmoji[emojiResolver]
```

## البارامترات

| Field         | النوع  | الديسكبربشين   | مطلوب |
| ------------- | ------ | -------------- |:-----:|
| emojiResolver | string | Unicode emoji. | true  |

## مثال

This will return `true` as "🤓" is an valid unicode emoji:

```javascript
bot.command({
    name: 'isUnicodeEmoji',
    code: `
  $isUnicodeEmoji[🤓]
  `
});
```
