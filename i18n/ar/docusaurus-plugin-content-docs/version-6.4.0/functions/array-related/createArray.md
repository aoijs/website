---
title: '$createArray'
description: '$createArray will create a new array with given elements.'
id: createArray
---

`$createArray` will create a new array with given elements.

## الاستخدام

```php
$createArray[name;...elements]
```

## البارامترات

| Field       | النوع  | الديسكبربشين     | مطلوب |
| ----------- | ------ | ---------------- |:-----:|
| name        | string | Array name.      | true  |
| ...elements | string | Elements to add. | true  |

## مثال

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```