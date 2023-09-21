---
title: $deleteObject
description: $deleteObject will delete a previously created object.
id: deleteObject
---

`$deleteObject` will create a previously created object.

## Usage

```php
$deleteObject[objectName]
```

## Parameters

| Field      | Type   | Description      | Required |
| ---------- | ------ | ---------------- | :------: |
| objectName | string | The object name. |   true   |

## Example(s)

```javascript
client.command({
  name: "deleteObject",
  code: `
  $deleteObject[Object Name]
  $getObjectProperty[Object Name;Leref]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "aoi.js": "dbd.js"
  }]
  `,
});
```
