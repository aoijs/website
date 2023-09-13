---
title: $getObject
description: $getObject will return the previously created object.
id: getObject
---

`$getObject` will return the previously created object.

## Usage

```php
$getObject[objectName;format?]
```

## Parameters

| Field      | Type    | Description                                                  | Required |
| ---------- | ------- | ------------------------------------------------------------ | :------: |
| objectName | string  | The object name.                                             |   true   |
| format?    | boolean | Format the output? <br /> 1. **true** (default) 2. **false** |  false   |

## Example(s)

This will return the object created in `$createObject`:

```javascript
bot.command({
  name: "getObject",
  code: `
    $getObject[true]
    $createObject[Object Name;{"Leref": "Ferel"}]
    `,
});
```
