---
title: '$arrayPop'
description: '$arrayPop will return the last item of the given array.'
id: arrayPop
---

`$arrayPop` will return the last item of the given array.

## प्रोयोग

```php
$arrayPop[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| name  | स्ट्रिंग | Array name.  | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```