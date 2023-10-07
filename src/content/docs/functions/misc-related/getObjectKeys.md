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

| Field      | Type   | Description         | Required |
| ---------- | ------ | ------------------- | :------: |
| objectName | string | Name of the object. |   true   |
| separator? | string | The separator.      |   true   |

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
  `
});
```
