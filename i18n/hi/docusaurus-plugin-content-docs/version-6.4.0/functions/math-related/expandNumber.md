---
title: '$expandNumber'
description: '$expandNumber will expand any given number.'
id: expandNumber
---

`$expandNumber` will expand any given number.

## प्रोयोग

```php
$expandNumber[abbrNumber]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन               | चाहिए |
| ---------- | -------- | -------------------------- |:-----:|
| abbrNumber | स्ट्रिंग | Number you want to expand. | true  |

## ट्रू (हा)

This will return `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```
