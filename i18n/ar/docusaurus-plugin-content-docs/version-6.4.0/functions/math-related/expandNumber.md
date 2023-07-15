---
title: '$expandNumber'
description: '$expandNumber will expand any given number.'
id: expandNumber
---

`$expandNumber` will expand any given number.

## الاستخدام

```php
$expandNumber[abbrNumber]
```

## البارامترات

| Field      | النوع  | الديسكبربشين               | مطلوب |
| ---------- | ------ | -------------------------- |:-----:|
| abbrNumber | string | Number you want to expand. | true  |

## مثال

This will return `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```
