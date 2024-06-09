---
title: $getArray
description: $getArray will return the given array in raw format.
id: getArray
---

`$getArray` will return the given array in raw format.

## Usage

```aoi
$getArray[name]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |

## Example(s)

```javascript
client.command({
    name: "getArray",
    code: `
  $getArray[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
