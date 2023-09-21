---
title: $findObjectProperty
description: $findObjectProperty will search for a given property of an object and return it.
id: findObjectProperty
---

`$findObjectProperty` will search for a given property of an object and return it.

## Usage

```php
$findObjectProperty[objectName;...properties]
```

## Parameters

| Field         | Type   | Description             | Required |
| ------------- | ------ | ----------------------- | :------: |
| objectName    | object | The object name.        |   true   |
| ...properties | string | Name of the properties. |   true   |

## Example(s)

This will return `{"Leref": "Ferel"}` as it was able to find "object":

```javascript
client.command({
  name: "findObjectProperty",
  code: `
  $findObjectProperty[Object Name;Leref]
  $createObject[Object Name;{"Leref": "Ferel", "aoi.js": "dbd.js"}]
  `,
});
```
