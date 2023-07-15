---
title: '$truncate'
description: '$truncate will remove all values after a decimal point.'
id: truncate
---

`$truncate` will remove all values after a decimal point.

## प्रोयोग

```php
$truncate[number]
```

## पैरामीटर्स

| फील्ड  | टाइप   | डिस्क्रिप्शन        | चाहिए |
| ------ | ------ | ------------------- |:-----:|
| number | number | Number to truncate. | true  |

## ट्रू (हा)

This will return `775` and remove `.9723` from the given value:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```