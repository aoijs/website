---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf will return the index of the last found item of the query.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` will return the index of the last found item of the query.

## الاستخدام

```php
$arrayLastIndexOf[name;query]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                        | مطلوب |
| ----- | ------ | ------------------------------------------------------------------- |:-----:|
| name  | string | Array name.                                                         | true  |
| query | string | The element we will be queering for every element inside the array. | true  |

## مثال

```javascript
bot.command({
    name: "array-indexof",
    code: `
  $arrayLastIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;akarui;documents;bot]
  `
    // It will return "3" as the word "akarui" is in the 3rd position of the array.
});
```