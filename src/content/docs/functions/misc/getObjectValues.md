---
title: $getObjectValues
description: $getObjectValues will return all values of all properties within the given object.
id: getObjectValues
---

`$getObjectValues` will return all values of all properties within the given object.

## Usage

```aoi
$getObjectValues[objectName;separator?]
```

## Parameters

| Field      | Type                                                                                              | Description         | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the object. |   true   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator.      |   true   |

## Example(s)

This will return `Ferel` and `aoi.js`:

```javascript
client.command({
    name: "getObjectValues",
    code: `
  $getObjectValues[Object Name; ]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "dbd.js": "aoi.js"
  }]
  `
});
```
