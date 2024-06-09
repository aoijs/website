---
title: $setObjectProperty
description: $setObjectProperty will set a property of an existing object.
id: setObjectProperty
---

`$setObjectProperty` will set a property of an existing object.

## Usage

```aoi
$setObjectProperty[objectName;property;value]
```

## Parameters

| Field      | Type                                                                                              | Description            | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the object.    |   true   |
| property   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the property.  |   true   |
| value      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Value of the property. |   true   |

## Example(s)

This will return `Ferel` from the `Leref` Property:

```javascript
client.command({
    name: "setObjectProperty",
    code: `
  $getObjectProperty[Object Name;Leref]
  $setObjectProperty[Object Name;Leref;Ferel]
  $createObject[Object Name;{}]
  `
});
```
