---
title: $editObjectProperty
description: $editObjectProperty edits the value of the object property.
id: editObjectProperty
---

`$editObjectProperty` edits the value of the object property.

## Usage

```aoi
$editObjectProperty[objectName;property;newValue]
```

## Parameters

| Field      | Type                                                                                                | Description                    | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------ | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | The name of the object.        |   true   |
| property   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The name of the property.      |   true   |
| newValue   | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | The new value of the property. |   true   |

## Example(s)

This will change the value of the property "year" from `2023` to `2024` and return it:

```js
client.command({
    name: `$getObjectProperty[obj;year]
  $editObjectProperty[obj;year;2024]
  $createObject[obj;{
    "year": "2023"
  }]`
});
```
