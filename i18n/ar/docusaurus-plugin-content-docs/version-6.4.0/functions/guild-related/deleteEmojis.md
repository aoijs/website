---
title: '$deleteEmojis'
description: '$deleteEmojis will delete multiple emoji.'
id: deleteEmojis
---

`$deleteEmojis` will delete multiple emoji.

## الاستخدام

```php
$deleteEmojis[...emojis]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                                    | مطلوب |
| ------ | ------ | --------------------------------------------------------------- |:-----:|
| emojis | string | Emoji Name, ID or full form of the emoji which will be deleted. | true  |

## مثال

This will delete two random emojis of your guild:

```javascript
bot.command({
    name: 'deleteEmojis',
    code: `
  $deleteEmojis[$randomEmoji;$randomEmoji]
  `
});
```
