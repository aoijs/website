---
title: $arrayPush
description: $arrayPush will add given elements to the array.
id: arrayPush
---

`$arrayPush` will add given elements to the array.

## Usage

```php
$arrayPush[...elements]
```

## Parameters

| Field       | Type                                                                                              | Description      | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| ...elements | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Elements to add. |   true   |

## Example(s)

```javascript
client.command({
  name: "array-push",
  code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
