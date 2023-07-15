---
title: '$arrayLength'
description: '$arrayLength will return the length of a given array.'
id: arrayLength
---

`$arrayLength` will return the length of a given array.

## الاستخدام

```php
$arrayLength[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

```javascript
bot.command({
    name: "array-length",
    code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```