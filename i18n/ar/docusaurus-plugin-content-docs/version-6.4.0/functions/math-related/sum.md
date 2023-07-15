---
title: '$sum'
description: '$sum will sum-up two given numbers.'
id: sum
---

`$sum` will sum-up two given numbers.

## الاستخدام

```php
$sum[num;num]
```

## البارامترات

| Field | النوع  | الديسكبربشين                         | مطلوب |
| ----- | ------ | ------------------------------------ |:-----:|
| num   | number | Numbers to perform calculation with. | true  |

## مثال

This will return `75` as `70+5` equals `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```