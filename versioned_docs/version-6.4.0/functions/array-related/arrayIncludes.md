---
title: $arrayIncludes
description: $arrayIncludes will check if a specific item exists in the array.
id: arrayIncludes
---

`$arrayIncludes` will check if a specific item exists in the array.

## Usage

```php
$arrayIncludes[name;query]
```

## Parameters

| Field | Type   | Description                                                         | Required |
| ----- | ------ | ------------------------------------------------------------------- | :------: |
| name  | string | Array name.                                                         |   true   |
| query | string | The element we will be queering for every element inside the array. |   true   |

## Example(s)

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "false" as it doesn't contain the word "Leref".
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "true" as it contains the word "akarui".
});
```