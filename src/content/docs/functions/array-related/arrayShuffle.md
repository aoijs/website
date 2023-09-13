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

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| name  | string | Array name. |   true   |

## Example(s)

```javascript
bot.command({
  name: "array-shuffle",
  code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `,
});
```
