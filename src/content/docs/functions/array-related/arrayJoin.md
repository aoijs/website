---
title: $arrayJoin
description: $arrayJoin will join the array with a given separator.
id: arrayJoin
---

`$arrayJoin` will join the array with a given separator.

## Usage

```php
$arrayJoin[name;separator?]
```

## Parameters

| Field      | Type   | Description | Required |
| ---------- | ------ | ----------- | :------: |
| name       | string | Array name. |   true   |
| separator? | string | Separator.  |  false   |

## Example(s)

```javascript
client.command({
  name: "array-join",
  code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```
