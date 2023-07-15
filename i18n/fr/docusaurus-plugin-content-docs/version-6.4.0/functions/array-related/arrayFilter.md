---
title: '$arrayFilter'
description: '$arrayFilter will check whether a element in the array equals the query and return it.'
id: arrayFilter
---

`$arrayFilter` will check whether a element in the array equals the query and return it.

## Usage

```php
$arrayFilter[name;query;queryType?;separator?]
```

## Parameters

| Field      | Type   | Description                                                         | Required |
| ---------- | ------ | ------------------------------------------------------------------- |:--------:|
| name       | string | Array name.                                                         |   true   |
| query      | string | The element we will be queering for every element inside the array. |   true   |
| queryType? | string | The comparison operator.                                            |  false   |
| separator? | string | Separator.                                                          |  false   |

## Comparison Operators

* `==` — Every item that matches the query.
* `!=` — Every item that doesn't match the query.
* `>`  — All items on the "left" of the found item, excluding itself.
* `<`  — All items on the "right" of the found item, excluding itself.
* `>=` — All items on the "left" of the found item, including itself.
* `<=` — All items on the "right" of the found item, including itself.

## Example(s)

```javascript
bot.command({
    name: "array-filter",
    code: `
  $arrayFilter[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "akarui" as it matches the query.
});
```

```javascript
bot.command({
    name: "array-filter",
    code: `
  $arrayFilter[array;akarui;<=;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "documents, bot" as its on the right of the found item.
});
```