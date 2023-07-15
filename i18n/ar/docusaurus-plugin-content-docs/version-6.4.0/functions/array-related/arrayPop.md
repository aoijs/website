---
title: '$arrayPop'
description: '$arrayPop will return the last item of the given array.'
id: arrayPop
---

`$arrayPop` will return the last item of the given array.

## الاستخدام

```php
$arrayPop[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```