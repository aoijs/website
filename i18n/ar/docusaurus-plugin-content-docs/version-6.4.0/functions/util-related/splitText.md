---
title: '$splitText'
description: '$splitText will return a value of $textSplit depending on the given index.'
id: splitText
---

`$splitText` will return a value of $textSplit depending on the given index.

## الاستخدام

```php
$splitText[index]
```

## البارامترات

| Field | النوع   | الديسكبربشين                   | مطلوب |
| ----- | ------- | ------------------------------ |:-----:|
| index | Integer | Index of `$textSplit` content. | true  |

## مثال

This will return `aoi.js` as it's the second argument of `$textSplit`:

```javascript
bot.command({
    name: 'splitText',
    code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `
});
```