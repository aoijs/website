---
title: $arraySplice
description: $arraySplice will splice elements from the array.
id: arraySplice
---

`$arraySplice` will splice elements from the array.

## Usage

```aoi
$arraySplice[name;index;amount;...elements]
```

## Parameters

| Field       | Type                                                                                              | Description           | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | --------------------- | :------: |
| name        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.           |   true   |
| index       | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Index of the element. |   true   |
| amount      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Amount to splice.     |   true   |
| ...elements | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Elements to splice.   |   true   |

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
