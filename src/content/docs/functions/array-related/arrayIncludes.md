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

| Field | Type                                                                                              | Description                                                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.                                                         |   true   |
| query | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The element we will be queering for every element inside the array. |   true   |

## Example(s)

```javascript
client.command({
  name: "array-includes",
  code: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
  // It will return "false" as it doesn't contain the word "Leref".
});
```

```javascript
client.command({
  name: "array-includes",
  code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
  // It will return "true" as it contains the word "akarui".
});
```
