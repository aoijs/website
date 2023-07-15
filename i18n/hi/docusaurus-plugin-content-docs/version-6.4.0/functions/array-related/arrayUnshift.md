---
title: '$arrayUnshift'
description: '$arrayUnshift will return the amount of elements of the given array.'
id: arrayUnshift
---

`$arrayUnshift` will return the amount of elements of the given array.

## प्रोयोग

```php
$arrayUnshift[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| name  | स्ट्रिंग | Array name.  | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```