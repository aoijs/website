---
title: '$isNumber'
description: '$isNumber will check if the given argument is a number.'
id: isNumber
---

`$isNumber` will check if the given argument is a number.

## الاستخدام

```php
$isNumber[num]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                | مطلوب |
| ----- | ------ | ------------------------------------------- |:-----:|
| num   | number | Argument you want to check if its a number. | true  |

## مثال

This will return `true` as `255` is a valid number:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
