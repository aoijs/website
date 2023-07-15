---
title: '$arrayShift'
description: '$arrayShift will return the first item of the given array.'
id: arrayShift
---

`$arrayShift` will return the first item of the given array.

## الاستخدام

```php
$arrayShift[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```