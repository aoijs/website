---
title: '$arrayShift'
description: '$arrayShift will return the first item of the given array.'
id: arrayShift
---

`$arrayShift` will return the first item of the given array.

## प्रोयोग

```php
$arrayShift[name]
```

## पैरामीटर्स

| फील्ड | टाइप     | डिस्क्रिप्शन | चाहिए |
| ----- | -------- | ------------ |:-----:|
| name  | स्ट्रिंग | Array name.  | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```