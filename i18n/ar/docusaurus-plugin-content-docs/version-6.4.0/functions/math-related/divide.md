---
title: '$divide'
description: '$divide will divide two given numbers.'
id: divide
---

`$divide` will divide two given numbers.

## الاستخدام

```php
$divide[...numbers;...numbers]
```

## البارامترات

| Field   | النوع  | الديسكبربشين                               | مطلوب |
| ------- | ------ | ------------------------------------------ |:-----:|
| numbers | number | Numbers you want to divide with eachother. | true  |

## مثال

This will return `23` as `69/3` equals it.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```
