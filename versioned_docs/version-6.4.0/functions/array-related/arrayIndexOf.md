---
title: $arrayIndexOf
description: $arrayIndexOf will return the index of the first found item of the query.
id: arrayIndexOf
---

`$arrayIndexOf` will return the index of the first found item of the query.

## Usage

```php
$arrayIndexOf[name;query]
```

## Parameters

| Field | Type   | Description                                                         | Required |
| ----- | ------ | ------------------------------------------------------------------- | :------: |
| name  | string | Array name.                                                         |   true   |
| query | string | The element we will be queering for every element inside the array. |   true   |

## Example(s)

```javascript
bot.command({
    name: "arrayIndexOf",
    code: `
  $arrayIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "2" as the word "akarui" is in the 2nd position of the array.
});
```