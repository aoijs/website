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

| Field      | Type   | Description      | Required |
| ---------- | ------ | ---------------- | :------: |
| objectName | string | The object name. |   true   |
| object     | object | JSON object.     |   true   |

## Example(s)

```javascript
bot.command({
  name: "createObject",
  code: `
  $getObjectProperty[Object Name;Leref]
  $createObject[Object Name;{
    "Leref": "Ferel",
    "aoi.js": "dbd.js"
  }]
  `,
});
```
