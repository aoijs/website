---
title: '$sub'
description: '$sub will substract two given numbers.'
id: sub
---

`$sub` will substract two given numbers.

## الاستخدام

```php
$sub[num;num]
```

## البارامترات

| Field | النوع  | الديسكبربشين                         | مطلوب |
| ----- | ------ | ------------------------------------ |:-----:|
| num   | number | Numbers to perform calculation with. | true  |

## مثال

This will return `65` as `70-5` equals `65`:

```javascript
bot.command({
    name: 'sub',
    code: `
  $sub[70;5]
  `
});
```