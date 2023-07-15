---
title: '$arraySplice'
description: '$arraySplice will splice elements from the array.'
id: arraySplice
---

`$arraySplice` will splice elements from the array.

## प्रोयोग

```php
$arraySplice[name;index;amount;...elements]
```

## पैरामीटर्स

| फील्ड       | टाइप     | डिस्क्रिप्शन          | चाहिए |
| ----------- | -------- | --------------------- |:-----:|
| name        | स्ट्रिंग | Array name.           | true  |
| index       | number   | Index of the element. | true  |
| amount      | number   | Amount to splice.     | true  |
| ...elements | स्ट्रिंग | Elements to splice.   | true  |

## ट्रू (हा)

```javascript
bot.command({
    name: "array-splice",
    code: `
  $arraySplice[array;2;3]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```