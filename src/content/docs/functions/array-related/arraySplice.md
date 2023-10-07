---
title: $arraySplice
description: $arraySplice will splice elements from the array.
id: arraySplice
---

`$arraySplice` will splice elements from the array.

## Usage

```php
$arraySplice[name;index;amount;...elements]
```

## Parameters

| Field       | Type   | Description           | Required |
| ----------- | ------ | --------------------- | :------: |
| name        | string | Array name.           |   true   |
| index       | number | Index of the element. |   true   |
| amount      | number | Amount to splice.     |   true   |
| ...elements | string | Elements to splice.   |   true   |

## Example(s)

```javascript
client.command({
  name: "array-splice",
  code: `
  $arraySplice[array;2;3]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
