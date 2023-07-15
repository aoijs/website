---
title: '$arrayShift'
description: '$arrayShift will return the first item of the given array.'
id: arrayShift
---

`$arrayShift` will return the first item of the given array.

## Usage

```php
$arrayShift[name]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- |:--------:|
| name  | string | Array name. |   true   |

## Example(s)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```