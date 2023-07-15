---
title: '$divide'
description: '$divide will divide two given numbers.'
id: divide
---

`$divide` will divide two given numbers.

## प्रोयोग

```php
$divide[...numbers;...numbers]
```

## पैरामीटर्स

| फील्ड   | टाइप   | डिस्क्रिप्शन                               | चाहिए |
| ------- | ------ | ------------------------------------------ |:-----:|
| numbers | number | Numbers you want to divide with eachother. | true  |

## ट्रू (हा)

This will return `23` as `69/3` equals it.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```
