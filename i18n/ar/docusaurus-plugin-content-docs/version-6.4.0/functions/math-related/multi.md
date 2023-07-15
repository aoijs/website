---
title: '$multi'
description: '$multi operation / multiplication.'
id: multi
---

`$multi` will multiplicate given numbers.

## الاستخدام

```php
$multi[num;num]
```

## البارامترات

| Field | النوع  | الديسكبربشين                  | مطلوب |
| ----- | ------ | ----------------------------- |:-----:|
| num   | number | Numbers you want to multiply. | true  |

## مثال

This will return `72` as `8*9` equals that:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```
