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

| Field         | Type                                                                                              | Description                                 | Required |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- | :------: |
| objectName    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the object that will be cloned. |   true   |
| newObjectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The new name for the cloned object.         |   true   |

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
  `
});
```
