---
title: '$arrayAt'
description: '$arrayAt will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.'
id: arrayAt
---

`$arrayAt` will choose the index (position) of the array element to be returned. Returns nothing if the given index can not be found.

## الاستخدام

```php
$arrayAt[name;index]
```

## البارامترات

| Field | النوع  | الديسكبربشين                 | مطلوب |
| ----- | ------ | ---------------------------- |:-----:|
| name  | string | Name of the array.           | true  |
| index | string | The position of the element. | true  |

## مثال

- This will return `Aoi.dashboard`:

```javascript
bot.command({
    name: "array-at",
    code: `
  $arrayAt[Aoi;3]

  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]
  `
    // Returns "Aoi.dashboard"
});
```
