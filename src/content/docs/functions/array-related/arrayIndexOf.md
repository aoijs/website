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

| Field | Type                                                                                              | Description                                                         | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | :------: |
| name  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.                                                         |   true   |
| query | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The element we will be queering for every element inside the array. |   true   |

## Example(s)

```javascript
client.command({
  name: "arrayIndexOf",
  code: `
  $arrayIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `,
  // It will return "2" as the word "akarui" is in the 2nd position of the array.
});
```
