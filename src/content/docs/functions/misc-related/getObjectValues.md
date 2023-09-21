---
title: $getObjectValues
description: $getObjectValues will return all values of all properties within the given object.
id: getObjectValues
---

`$getObjectValues` will return all values of all properties within the given object.

## Usage

```php
$getObjectValues[objectName;separator?]
```

## Parameters

| Field      | Type   | Description         | Required |
| ---------- | ------ | ------------------- | :------: |
| objectName | string | Name of the object. |   true   |
| separator? | string | The separator.      |   true   |

## Example(s)

This will return `Ferel` and `aoi.js`:

```javascript
client.command({
  name: "getObjectValues",
  code: `
  $getObjectValues[Object Name;Leref;Ferel]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "dbd.js": "aoi.js"
  }]
  `,
});
```
