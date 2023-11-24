---
title: $getObjectProperty
description: $getObjectProperty will return a object property of a given object.
id: getObjectProperty
---

`$getObjectProperty` will return a object property of a given object.

## Usage

```php
$getObjectProperty[objectName;property]
```

## Parameters

| Field      | Type                                                                                              | Description             | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The object name.        |   true   |
| property   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the properties. |   true   |

## Example(s)

This will return the object property of "Leref" created in `$createObject`:

```javascript
client.command({
  name: "getObjectProperty",
  code: `
    $getObjectProperty[Object Name;Leref]
    $createObject[Object Name;{"Leref": "Ferel"}]
    `
});
```
