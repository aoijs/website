---
title: '$allEmojisCount'
description: '$allEmojisCount will return the amount of emojis of a given type.'
id: allEmojisCount
---

`$allEmojisCount` will return the amount of emojis of a given type.

## प्रोयोग

```php
$allEmojisCount[type?]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                                | चाहिए        |
| ----- | -------- | ------------------------------------------- | ------------ |
| टाइप? | स्ट्रिंग | Type you want the amount of to be returned. | असत्य (नहीं) |

| Emoji Type      |          |
| --------------- | -------- |
| Animated Emojis | animated |
| Stable Emojis   | normal   |

## ट्रू (हा)

This will return the amount of emojis in your guild:

```javascript
bot.command({
    name: 'allEmojisCount',
    code: `
  $allEmojisCount
  `
});
```