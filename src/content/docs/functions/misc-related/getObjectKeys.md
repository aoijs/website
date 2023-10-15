---
title: $getObjectKeys
description: $getObjectKeys will return all keys of all properties within the given object.
id: getObjectKeys
---

`$getObjectKeys` will return all keys of all properties within the given object.

## Usage

```php
$getObjectKeys[objectName;separator?]
```

## Parameters

| Field      | Type                                                                                              | Description         | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the object. |   true   |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The separator.      |   true   |

## Example(s)

This will return `Leref` and `dbd.js`:

```javascript
client.command({
  name: "getObjectKeys",
  code: `
  $getObjectKeys[Object Name;Leref;Ferel]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "dbd.js": "aoi.js"
  }]
  `,
});
```
