---
title: $arrayShuffle
description: $arrayShuffle will shuffle the elements of the given array.
id: arrayShuffle
---

`$arrayShuffle` will shuffle the elements of the given array.

## Usage

```php
$arrayShuffle[name]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |

## Example(s)

```javascript
client.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
