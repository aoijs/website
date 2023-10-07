---
title: $deleteArray
description: $deleteArray will delete a previously created array.
id: deleteArray
---

`$deleteArray` will delete a previously created array.

## Usage

```php
$deleteArray[name]
```

## Parameters

| Field | Type   | Description | Required |
| ----- | ------ | ----------- | :------: |
| name  | string | Array name. |   true   |

## Example(s)

This will delete the array "array":

```javascript
client.command({
  name: "deleteArray",
  code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```
