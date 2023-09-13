---
title: $createArray
description: $createArray will create a new array with given elements.
id: createArray
---

`$createArray` will create a new array with given elements.

## Usage

```php
$createArray[name;...elements]
```

## Parameters

| Field       | Type   | Description      | Required |
| ----------- | ------ | ---------------- | :------: |
| name        | string | Array name.      |   true   |
| ...elements | string | Elements to add. |   true   |

## Example(s)

```javascript
bot.command({
  name: "array-create",
  code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `,
});
```
