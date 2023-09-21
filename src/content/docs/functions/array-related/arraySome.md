---
title: $arraySome
description: $arraySome will check for given elements in the array.
id: arraySome
---

`$arraySome` will check for given elements in the array and return boolean.

## Usage

```php
$arraySome[name;query;queryType?]
```

## Parameters

| Field      | Type   | Description                                                         | Required |
| ---------- | ------ | ------------------------------------------------------------------- | :------: |
| name       | string | Array name.                                                         |   true   |
| query      | string | The element we will be queering for every element inside the array. |   true   |
| queryType? | string | The comparison operator.                                            |  false   |

- `==` — Every item that matches the query.
- `!=` — Every item that doesn't match the query.
- `>` — All items on the "left" of the found item, excluding itself.
- `<` — All items on the "right" of the found item, excluding itself.
- `>=` — All items on the "left" of the found item, including itself.
- `<=` — All items on the "right" of the found item, including itself.

## Example(s)

```javascript
client.command({
  name: "array-some",
  code: `
  $arraySome[array;aoi.js;==]
  $createArray[array;aoi.js;akarui;documents;bot]
  `,
});
```
