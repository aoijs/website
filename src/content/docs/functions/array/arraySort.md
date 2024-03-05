---
title: $arraySort
description: $arraySort will sort a given array.
id: arraySort
---

`$arraySort` will sort a given array.

## Usage

```php
$arraySort[name;type?]
```

## Parameters

| Field | Type                                                                                              | Description                                                              | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.                                                              |   true   |
| type  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Type to sort after <br /> 1. **asc** (ascending) 2. **dsc** (descending) |   true   |

## Example(s)

```javascript
client.command({
  name: "array-sort",
  code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
