---
title: '$arrayReverse'
description: '$arrayReverse will reverse the elements in the given array.'
id: arrayReverse
---

`$arrayReverse` will reverse the elements in the given array.

## الاستخدام

```php
$arrayReverse[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```