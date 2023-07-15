---
title: '$math'
description: '$math will return a calculated result of the given argument.'
id: math
---

`$math` will return a calculated result of the given argument.

## الاستخدام

```php
$math[equation]
```

## البارامترات

| Field    | النوع  |     الديسكبربشين     | مطلوب |
| -------- | ------ |:--------------------:|:-----:|
| equation | string | Calculation (/*-+()) | true  |

## مثال

This will return `205` as `15+5/2*26+(5+120)` equals it:

```javascript
bot.command({
    name: 'math',
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
