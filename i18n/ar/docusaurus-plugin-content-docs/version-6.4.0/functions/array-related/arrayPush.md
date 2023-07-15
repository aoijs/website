---
title: '$arrayPush'
description: '$arrayPush will add given elements to the array.'
id: arrayPush
---

`$arrayPush` will add given elements to the array.

## الاستخدام

```php
$arrayPush[...elements]
```

## البارامترات

| Field       | النوع  | الديسكبربشين     | مطلوب |
| ----------- | ------ | ---------------- |:-----:|
| ...elements | string | Elements to add. | true  |

## مثال

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```