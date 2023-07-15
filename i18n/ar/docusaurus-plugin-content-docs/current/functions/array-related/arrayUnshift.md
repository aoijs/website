---
title: '$arrayUnshift'
description: '$arrayUnshift will return the amount of elements of the given array.'
id: arrayUnshift
---

`$arrayUnshift` will return the amount of elements of the given array.

## الاستخدام

```php
$arrayUnshift[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```