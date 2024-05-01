---
title: $arrayShift
description: $arrayShift will return the first item of the given array.
id: arrayShift
---

`$arrayShift` will return the first item of the given array.

## Usage

```php
$arrayShift[name]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |

## Example(s)

```javascript
client.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
