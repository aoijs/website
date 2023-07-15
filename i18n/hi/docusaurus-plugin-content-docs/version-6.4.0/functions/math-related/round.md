---
title: '$round'
description: '$round will round to the next whole number.'
id: round
---

`$round` will round to the next whole number.

## प्रोयोग

```php
$round[number]
```

## पैरामीटर्स

| फील्ड  | टाइप   | डिस्क्रिप्शन     | चाहिए |
| ------ | ------ | ---------------- |:-----:|
| number | number | Number to round. | true  |

## ट्रू (हा)

This will return `555` as it's the next number to `555.78`:

```javascript
bot.command({
    name: 'round',
    code: `
  $round[555.78]
  `
});
```