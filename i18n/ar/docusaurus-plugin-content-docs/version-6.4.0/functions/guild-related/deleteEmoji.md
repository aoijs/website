---
title: '$deleteEmoji'
description: '$deleteEmoji will delete a specific emoji.'
id: deleteEmoji
---

`$deleteEmoji` will delete a specific emoji.

## الاستخدام

```php
$deleteEmoji[emoji]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                    | مطلوب |
| ----- | ------ | --------------------------------------------------------------- |:-----:|
| emoji | string | Emoji Name, ID or full form of the emoji which will be deleted. | true  |

## مثال

This will delete a random emoji of your guild:

```javascript
bot.command({
    name: 'deleteEmoji',
    code: `
  $deleteEmoji[$randomEmoji]
  `
});
```
