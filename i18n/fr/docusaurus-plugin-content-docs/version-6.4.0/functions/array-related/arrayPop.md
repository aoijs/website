---
title: '$arrayPop'
description: '$arrayPop will return the last item of the given array.'
id: arrayPop
---

`$arrayPop` will return the last item of the given array.

## Usage

```php
$arrayPop[name]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- |:--------:|
| name  | string | Array name. |   true   |

## Example(s)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```