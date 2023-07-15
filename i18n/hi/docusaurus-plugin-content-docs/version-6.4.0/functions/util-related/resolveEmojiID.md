---
title: '$resolveEmojiID'
description: '$resolveEmojiID will resolve a certain emoji.'
id: resolveEmojiID
---

`$resolveEmojiID` will resolve a certain emoji.

## प्रोयोग

```php
$resolveEmojiID[emojiResolver]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन          | चाहिए |
| ------------- | -------- | --------------------- |:-----:|
| emojiResolver | स्ट्रिंग | Emoji name or string. | true  |

## ट्रू (हा)

This will return `<:LerefMoney:1003365344724910191>`:

```javascript
bot.command({
    name: 'resolveEmojiID',
    code: `
  $resolveEmojiID[LerefMoney]
  `
});
```