---
title: $arrayPush
description: $arrayPush will add given elements to the array.
id: arrayPush
---

`$arrayPush` will add given elements to the array.

## Usage

```php
$arrayPush[...elements]
```

## Parameters

| Field       | Type   | Description      | Required |
| ----------- | ------ | ---------------- | :------: |
| ...elements | string | Elements to add. |   true   |

## Example(s)

```javascript
bot.command({
  name: "array-push",
  code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `,
});
```
