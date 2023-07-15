---
title: '$deleteArray'
description: '$deleteArray will delete a previously created array.'
id: deleteArray
---

`$deleteArray` will delete a previously created array.

## الاستخدام

```php
$deleteArray[name]
```

## البارامترات

| Field | النوع  | الديسكبربشين | مطلوب |
| ----- | ------ | ------------ |:-----:|
| name  | string | Array name.  | true  |

## مثال

This will delete the array "array":

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```