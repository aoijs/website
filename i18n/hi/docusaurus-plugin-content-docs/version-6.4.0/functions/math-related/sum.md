---
title: '$sum'
description: '$sum will sum-up two given numbers.'
id: sum
---

`$sum` will sum-up two given numbers.

## प्रोयोग

```php
$sum[num;num]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन                         | चाहिए |
| ----- | ------ | ------------------------------------ |:-----:|
| num   | number | Numbers to perform calculation with. | true  |

## ट्रू (हा)

This will return `75` as `70+5` equals `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```