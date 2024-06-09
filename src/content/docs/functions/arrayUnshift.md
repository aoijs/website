---
title: $arrayUnshift
description: $arrayUnshift will return the amount of elements of the given array.
id: arrayUnshift
---

`$arrayUnshift` will return the amount of elements of the given array.

## Usage

```aoi
$arrayUnshift[name]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |

## Example(s)

```javascript
client.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
