---
title: '$argsSlice'
description: '$argsSlice will slice the given argument depending on the users input.'
id: argsSlice
---

`$argsSlice` will slice the given argument depending on the users input.

## प्रोयोग

```php
$argsSlice[text;from?;to] 
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन                              |    चाहिए     |
| ----- | -------- | ----------------------------------------- |:------------:|
| text  | स्ट्रिंग | Text you want to slice                    |     true     |
| from? | number   | Starting point where to slice the message | असत्य (नहीं) |
| to    | number   | Ending point where slicing ends           |     true     |

## ट्रू (हा)

This will return `Bye` and remove `Hello` from the given text:

```javascript
bot.command({
    name: 'slice',
    code: `
  $argsSlice[Hello Bye;1;5]
  `
});
```
