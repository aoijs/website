---
title: '$argsSlice'
description: '$argsSlice will slice the given argument depending on the users input.'
id: argsSlice
---

`$argsSlice` will slice the given argument depending on the users input.

## الاستخدام

```php
$argsSlice[text;from?;to] 
```

## البارامترات

| Field | النوع  | الديسكبربشين                              | مطلوب |
| ----- | ------ | ----------------------------------------- |:-----:|
| text  | string | Text you want to slice                    | true  |
| from? | number | Starting point where to slice the message | false |
| to    | number | Ending point where slicing ends           | true  |

## مثال

This will return `Bye` and remove `Hello` from the given text:

```javascript
bot.command({
    name: 'slice',
    code: `
  $argsSlice[Hello Bye;1;5]
  `
});
```
