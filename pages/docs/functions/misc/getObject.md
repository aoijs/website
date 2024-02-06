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

| Field      | Type                                                                                                | Description                                                  | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The object name.                                             |   true   |
| format?    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Format the output? <br /> 1. **true** (default) 2. **false** |  false   |

## Example(s)

This will return the object created in `$createObject`:

```javascript
client.command({
  name: "getObject",
  code: `
    $getObject[Object Name;true]
    $createObject[Object Name;{"Leref": "Ferel"}]
    `
});
```
