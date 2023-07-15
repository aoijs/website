---
title: '$arrayFind'
description: '$arrayFind will check for the first element in the array which matches the query and return it.'
id: arrayFind
---

`$arrayFind` will check for the first element in the array which matches the query and return it.

## الاستخدام

```php
$arrayFind[name;query;queryType?;separator?]
```

## البارامترات

| Field      | النوع  | الديسكبربشين                                                        | مطلوب |
| ---------- | ------ | ------------------------------------------------------------------- |:-----:|
| name       | string | Array name.                                                         | true  |
| query      | string | The element we will be queering for every element inside the array. | true  |
| queryType? | string | The comparison operator.                                            | false |
| separator? | string | Separator.                                                          | false |

## Comparison Operators

* `==` — Every item that matches the query.
* `!=` — Every item that doesn't match the query.
* `>`  — All items on the "left" of the found item, excluding itself.
* `<`  — All items on the "right" of the found item, excluding itself.
* `>=` — All items on the "left" of the found item, including itself.
* `<=` — All items on the "right" of the found item, including itself.

## مثال

```javascript
bot.command({
    name: "array-find",
    code: `
  $arrayFind[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "akarui" as it matches the query.
});
```