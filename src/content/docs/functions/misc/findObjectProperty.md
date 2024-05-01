---
title: $findObjectProperty
description: $findObjectProperty will search for a given property of an object and return it.
id: findObjectProperty
---

`$findObjectProperty` will search for a given property of an object and return it.

## Usage

```php
$findObjectProperty[objectName;property;format?]
```

## Parameters

| Field      | Type                                                                                                | Description                                                   | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The object's name.                                            |   true   |
| property   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Name of the property to be searched.                          |   true   |
| format?    | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | Format the output?<br/>1. **true**<br/>2. **false** (default) |  false   |

## Example(s)

This will return `{"Leref": "Ferel"}` as it was able to find "object":

```javascript
client.command({
    name: "findObjectProperty",
    code: `
  $findObjectProperty[Object Name;Leref]
  $createObject[Object Name;{"Leref": "Ferel", "aoi.js": "dbd.js"}]
  `
});
```
