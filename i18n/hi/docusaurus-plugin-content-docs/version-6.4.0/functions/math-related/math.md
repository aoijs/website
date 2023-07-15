---
title: '$math'
description: '$math will return a calculated result of the given argument.'
id: math
---

`$math` will return a calculated result of the given argument.

## प्रोयोग

```php
$math[equation]
```

## पैरामीटर्स

| फील्ड    | टाइप     |     डिस्क्रिप्शन     | चाहिए |
| -------- | -------- |:--------------------:|:-----:|
| equation | स्ट्रिंग | Calculation (/*-+()) | true  |

## ट्रू (हा)

This will return `205` as `15+5/2*26+(5+120)` equals it:

```javascript
bot.command({
    name: 'math',
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
