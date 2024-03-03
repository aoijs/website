---
title: $arrayReverse
description: $arrayReverse will reverse the elements in the given array.
id: arrayReverse
---

`$arrayReverse` will reverse the elements in the given array.

## Usage

```php
$arrayReverse[name]
```

## Parameters

| Field | Type                                                                                              | Description | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |

## Example(s)

```javascript
client.command({
  name: "array-reverse",
  code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
