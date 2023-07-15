---
title: '$resolveEmojiID'
description: '$resolveEmojiID will resolve a certain emoji.'
id: resolveEmojiID
---

`$resolveEmojiID` will resolve a certain emoji.

## الاستخدام

```php
$resolveEmojiID[emojiResolver]
```

## البارامترات

| Field         | النوع  | الديسكبربشين          | مطلوب |
| ------------- | ------ | --------------------- |:-----:|
| emojiResolver | string | Emoji name or string. | true  |

## مثال

This will return `<:LerefMoney:1003365344724910191>`:

```javascript
bot.command({
    name: 'resolveEmojiID',
    code: `
  $resolveEmojiID[LerefMoney]
  `
});
```