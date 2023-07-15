---
title: '$modulo'
description: '$modulo operation / the remainder when dividing.'
id: modulo
---

`$modulo` operation / the remainder when dividing.

## الاستخدام

```php
$modulo[num;num]
```

## البارامترات

| Field | النوع  | الديسكبربشين                         | مطلوب |
| ----- | ------ | ------------------------------------ |:-----:|
| num   | number | Numbers to return the raimainder of. | true  |

## مثال

This will return `2` as it's the remainder of `5 % 3`:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
