---
title: '$messageSlice'
description: '$messageSlice will slice a message.'
id: messageSlice
---

`$messageSlice` will slice a message.

## الاستخدام

```php
$messageSlice[from;to?]
```

## البارامترات

| Field | النوع  | الديسكبربشين                               | مطلوب |
| ----- | ------ | ------------------------------------------ |:-----:|
| from  | number | Starting point where to slice the message. | true  |
| to?   | number | Ending point where slicing ends.           | false |

## مثال

This will slice the message from the first message to the fifth message:

```javascript
bot.command({
    name: 'messageSlice',
    code: `
  $messageSlice[1;5]
  `
});
```
