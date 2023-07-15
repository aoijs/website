---
title: '$arraySort'
description: '$arraySort will sort a given array.'
id: arraySort
---

`$arraySort` will sort a given array.

## الاستخدام

```php
$arraySort[name;type?]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                                   | مطلوب |
| ----- | ------ | ------------------------------------------------------------------------------ |:-----:|
| name  | string | Array name.                                                                    | true  |
| type  | string | Type to sort after <br /> 1. **asc** (ascending) 2. **dsc** (descending) | true  |

## مثال

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```