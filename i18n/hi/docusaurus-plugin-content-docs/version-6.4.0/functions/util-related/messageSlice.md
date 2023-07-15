---
title: '$messageSlice'
description: '$messageSlice will slice a message.'
id: messageSlice
---

`$messageSlice` will slice a message.

## प्रोयोग

```php
$messageSlice[from;to?]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                               |    चाहिए     |
| ----- | ------ | ------------------------------------------ |:------------:|
| from  | number | Starting point where to slice the message. |     true     |
| to?   | number | Ending point where slicing ends.           | असत्य (नहीं) |

## ट्रू (हा)

This will slice the message from the first message to the fifth message:

```javascript
bot.command({
    name: 'messageSlice',
    code: `
  $messageSlice[1;5]
  `
});
```
