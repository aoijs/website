---
title: '$get'
description: '$get is used for retrieving temporary variables.'
id: get
---

`$get` will retrieve temporary variables stored by `$let`.

## الاستخدام

```php
$get[var]
```

## البارامترات

| Field | النوع  | الديسكبربشين                             | مطلوب |
| ----- | ------ | ---------------------------------------- |:-----:|
| var   | string | Temporary variable you want to retrieve. | true  |

## مثال

This will return `Leref` from `$let`:

```javascript
bot.command({
    name: 'get',
    code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`
});
```
