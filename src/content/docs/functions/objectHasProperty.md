---
title: $objectHasProperty
description: $objectHasProperty checks if a specified property exists on a given object.
id: objectHasProperty
---

`$objectHasProperty` checks if a given object contains a specified property and returns `true` or `false`.

## Usage

```aoi  
$objectHasProperty[objectName;property]
```

## Parameters

| Field      | Type                                                                                              | Description                         | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the object to check.    |   true   |
| property   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The property name to look for.      |   true   |

## Example(s)

This example creates an object named `Name` and then checks if it has the property `Leref`:

```javascript
client.command({
    name: "objectHasProperty",
    code: `
  $objectHasProperty[Name;Leref] $comment[true]

  $createObject[Name;{
    "Leref": "Ferel",
    "aoi.js": "dbd.js"
  }]
  `
});
```