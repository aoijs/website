---
title: $createArray
description: $createArray will create a new array with given elements.
id: createArray
---

`$createArray` will create a new array with given elements.

## Usage

```aoi
$createArray[name;...elements]
```

## Parameters

| Field       | Type                                                                                              | Description      | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| name        | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name.      |   true   |
| ...elements | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Elements to add. |  false   |

## Example(s)

This will create an array called "array" with the following elements:

```javascript
client.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
