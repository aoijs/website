---
title: '$isNumber'
description: '$isNumber will check if the given argument is a number.'
id: isNumber
---

`$isNumber` will check if the given argument is a number.

## प्रोयोग

```php
$isNumber[num]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                                | चाहिए |
| ----- | ------ | ------------------------------------------- |:-----:|
| num   | number | Argument you want to check if its a number. | true  |

## ट्रू (हा)

This will return `true` as `255` is a valid number:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
