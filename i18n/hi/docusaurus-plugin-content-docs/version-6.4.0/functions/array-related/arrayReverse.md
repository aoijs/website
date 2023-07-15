---
title: '$arrayReverse'
description: '$arrayReverse will reverse the elements in the given array.'
id: arrayReverse
---

`$arrayReverse` will reverse the elements in the given array.

## प्रोयोग

```php
$arrayReverse[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| name  | स्ट्रिंग | Array name.  | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```