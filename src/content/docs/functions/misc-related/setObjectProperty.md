---
title: $setObjectProperty
description: $setObjectProperty will set a property of an existing object.
id: setObjectProperty
---

`$setObjectProperty` will set a property of an existing object.

## Usage

```php
$setObjectProperty[objectName;property;value]
```

## Parameters

| Field      | Type   | Description            | Required |
| ---------- | ------ | ---------------------- | :------: |
| objectName | string | Name of the object.    |   true   |
| property   | string | Name of the property.  |   true   |
| value      | string | Value of the property. |   true   |

## Example(s)

This will return `Ferel` from the `Leref` Property:

```javascript
bot.command({
  name: "setObjectProperty",
  code: `
  $getObjectProperty[Object Name;Leref]
  $setObjectProperty[Object Name;Leref;Ferel]
  $createObject[Object Name;{}]
  `,
});
```
