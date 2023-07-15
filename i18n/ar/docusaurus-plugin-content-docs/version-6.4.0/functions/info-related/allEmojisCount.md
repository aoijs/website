---
title: '$allEmojisCount'
description: '$allEmojisCount will return the amount of emojis of a given type.'
id: allEmojisCount
---

`$allEmojisCount` will return the amount of emojis of a given type.

## الاستخدام

```php
$allEmojisCount[type?]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                | مطلوب |
| ------ | ------ | ------------------------------------------- | ----- |
| النوع? | string | Type you want the amount of to be returned. | false |

| Emoji Type      |          |
| --------------- | -------- |
| Animated Emojis | animated |
| Stable Emojis   | normal   |

## مثال

This will return the amount of emojis in your guild:

```javascript
bot.command({
    name: 'allEmojisCount',
    code: `
  $allEmojisCount
  `
});
```