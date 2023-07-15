---
title: '$roundTenth'
description: '$roundTenth will round to the next tenth.'
id: roundTenth
---

`$roundTenth` will round to the next tenth.

## الاستخدام

```php
$roundTenth[number;decimalPosition]
```

## البارامترات

| Field           | النوع   | الديسكبربشين                                       | مطلوب |
| --------------- | ------- | -------------------------------------------------- |:-----:|
| number          | number  | Number to round.                                   | true  |
| decimalPosition | Integer | How many numbers after the comma will be returned. | true  |

## مثال

This will return `503.70` as it's the nearest number to `503.6972`:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```