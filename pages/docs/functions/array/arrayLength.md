---
title: $arrayLength
description: $arrayLength will return the length of a given array.
id: arrayLength
---

`$arrayLength` will return the length of a given array.

## Usage

```php
$arrayLength[name]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |

## Example(s)

```javascript
client.command({
  name: "array-length",
  code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
