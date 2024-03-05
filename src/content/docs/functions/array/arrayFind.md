---
title: $arrayFind
description: $arrayFind will check for the first element in the array which matches the query and return it.
id: arrayFind
---

`$arrayFind` will check for the first element in the array which matches the query and return it.

## Usage

```php
$arrayFind[name;query;queryType?;separator?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                         | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| name       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.                                                         |   true   |
| query      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The element we will be queering for every element inside the array. |   true   |
| queryType? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The comparison operator.                                            |  false   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator.                                                          |  false   |

## Comparison Operators

- `==` — Every item that matches the query.
- `!=` — Every item that doesn't match the query.
- `>` — All items on the "left" of the found item, excluding itself.
- `<` — All items on the "right" of the found item, excluding itself.
- `>=` — All items on the "left" of the found item, including itself.
- `<=` — All items on the "right" of the found item, including itself.

## Example(s)

```javascript
client.command({
  name: "array-find",
  code: `
  $arrayFind[array;akarui;==;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
  // It will return "akarui" as it matches the query.
});
```
