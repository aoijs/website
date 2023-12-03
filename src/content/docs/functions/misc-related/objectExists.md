---
title: $objectExists
description: $objectExists will check if a given object exists.
id: objectExists
---

`$objectExists` will check if a given object exists.

## Usage

```php
$objectExists[objectName]
```

## Parameters

| Field      | Type                                                                                              | Description      | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------- | :------: |
| objectName | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The object name. |   true   |

## Example(s)

This will return true as the object exists created by `$createObject`:

```javascript
client.command({
  name: "objectExists",
  code: `
    $objectExists[Object Name]
    $createObject[Object Name;{"Leref": "Ferel"}]
    `
});
```
