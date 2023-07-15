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

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| name  | string | Array name. |   true   |

## Example(s)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```