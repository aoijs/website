---
title: $createObject
description: $createObject will create a new object.
id: createObject
---

`$createObject` will create a new object.

## Usage

```php
$createObject[objectName;object]
```

## Parameters

| Field                                       | Type                                                                                              | Description      | Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| objectName                                  | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The object name. |   true   |
| object                                      | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | JSON object.     |   true   |

## Example(s)

```javascript
client.command({
  name: "createObject",
  code: `
  $getObjectProperty[Object Name;Leref]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "aoi.js": "dbd.js"
  }]
  `
});
```
