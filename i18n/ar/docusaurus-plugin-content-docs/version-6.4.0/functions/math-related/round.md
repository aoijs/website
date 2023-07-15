---
title: '$round'
description: '$round will round to the next whole number.'
id: round
---

`$round` will round to the next whole number.

## الاستخدام

```php
$round[number]
```

## البارامترات

| Field  | النوع  | الديسكبربشين     | مطلوب |
| ------ | ------ | ---------------- |:-----:|
| number | number | Number to round. | true  |

## مثال

This will return `555` as it's the next number to `555.78`:

```javascript
bot.command({
    name: 'round',
    code: `
  $round[555.78]
  `
});
```