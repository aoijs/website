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

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| name  | string | Array name. |   true   |

## Example(s)

```javascript
bot.command({
    name: "array-length",
    code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```