---
title: $removeObjectProperty
description: $removeObjectProperty will remove a property of an object.
id: removeObjectProperty
---

`$removeObjectProperty` will remove a property of an given object.

## Usage

```php
$removeObjectProperty[objectName;...properties]
```

## Parameters

| Field         | Type   | Description             | Required |
| ------------- | ------ | ----------------------- | :------: |
| objectName    | string | The object name.        |   true   |
| ...properties | string | Name of the properties. |   true   |

## Example(s)

This will remove `Object` from the given object:

```javascript
client.command({
  name: "removeObjectProperty",
  code: `
  $removeObjectProperty[Object Name;Object]
  $createObject[Object Name;{"Object": "Property"}]
  `,
});
```
