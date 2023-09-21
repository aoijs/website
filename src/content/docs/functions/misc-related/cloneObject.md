---
title: $cloneObject
description: $cloneObject will clone a previously created object.
id: cloneObject
---

`$cloneObject` will clone a previously created object.

## Usage

```php
$cloneObject[objectName;newObjectName]
```

## Parameters

| Field         | Type   | Description                           | Required |
| ------------- | ------ | ------------------------------------- | :------: |
| objectName    | string | The object name.                      |   true   |
| newObjectName | object | The object name of the cloned object. |   true   |

## Example(s)

```javascript
client.command({
  name: "cloneObject",
  code: `
  $getObjectProperty[Another Name;Leref]
  $cloneObject[Object Name;Another Name]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "aoi.js": "dbd.js"
  }]
  `,
});
```
