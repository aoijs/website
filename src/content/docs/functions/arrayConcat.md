---
title: $arrayConcat
description: $arrayConcat will concat multiple arrays.
id: arrayConcat
---

`$arrayConcat` will concat multiple arrays.

## Usage

```aoi
$arrayConcat[separator;...arrays]
```

## Parameters

| Field     | Type                                                                                              | Description        | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------ | :------: |
| separator | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator.         |   true   |
| ...arrays | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the array. |   true   |

## Example(s)

This will return `This is a test` as it concats array 1 and 2:

```javascript
client.command({
    name: "arrayConcat",
    code: `
  $arrayConcat[ ;array1;array2]
  $createArray[array1;This is]
  $createArray[array2;a test]
  `
});
```
