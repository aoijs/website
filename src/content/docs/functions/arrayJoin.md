---
title: $arrayJoin
description: $arrayJoin will join the array with a given separator.
id: arrayJoin
---

`$arrayJoin` will join the array with a given separator.

## Usage

```aoi
$arrayJoin[name;separator?]
```

## Parameters

| Field      | Type                                                                                              | Description | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| name       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Array name. |   true   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator.  |  false   |

## Example(s)

```javascript
client.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
