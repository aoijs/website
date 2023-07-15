---
title: '$arrayShuffle'
description: '$arrayShuffle will shuffle the elements of the given array.'
id: arrayShuffle
---

`$arrayShuffle` will shuffle the elements of the given array.

## الاستخدام

```php
$arrayShuffle[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```