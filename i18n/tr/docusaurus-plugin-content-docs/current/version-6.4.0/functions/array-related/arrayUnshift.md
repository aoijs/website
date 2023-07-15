---
title: '$arrayUnshift'
description: '$arrayUnshift will return the amount of elements of the given array.'
id: arrayUnshift
---

`$arrayUnshift` will return the amount of elements of the given array.

## Usage

```php
$arrayUnshift[name]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- |:--------:|
| name  | string | Array name. |   true   |

## Example(s)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```