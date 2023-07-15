---
title: '$textSlice'
description: '$textSlice will slice a message depending on the given arguments.'
id: textSlice
---

`$textSlice` will slice a message depending on the given arguments.

## प्रोयोग

```php
$textSlice[text;from?;to]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                               |    चाहिए     |
| ----- | -------- | ------------------------------------------ |:------------:|
| text  | स्ट्रिंग | Text you want to slice.                    |     true     |
| from? | number   | Starting point where to slice the message. | असत्य (नहीं) |
| to    | number   | Ending point where slicing ends.           |     true     |

## ट्रू (हा)

This will return `Hello` and remove `Bye` from the given text:

```javascript
bot.command({
    name: 'textSlice',
    code: `
  $textSlice[Hello Bye;0;5]
  `
});
```