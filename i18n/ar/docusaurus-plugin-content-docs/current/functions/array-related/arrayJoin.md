---
title: '$arrayJoin'
description: '$arrayJoin will join the array with a given separator.'
id: arrayJoin
---

`$arrayJoin` will join the array with a given separator.

## الاستخدام

```php
$arrayJoin[name;separator?]
```

## البارامترات

| Field      | النوع  | الديسكبربشين | مطلوب |
| ---------- | ------ | ------------ |:-----:|
| name       | string | Array name.  | true  |
| separator? | string | Separator.   | false |

## مثال

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```