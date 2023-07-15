---
title: '$let'
description: '$let is used for storing temporary variables.'
id: let
---

`$let` will store temporary variables which can be retrieved by `$get`.

## الاستخدام

```php
$let[varname;value]
```

## البارامترات

| Field   | النوع  | الديسكبربشين                                      | مطلوب |
| ------- | ------ | ------------------------------------------------- |:-----:|
| varname | string | Name of the temporary variable.                   | true  |
| value   | string | Value of the temporary variable you want to save. | true  |

## مثال

This will return `Ayaka` from `$get`:

```javascript
bot.command({
    name: 'let',
    code: `
$get[genius]
$let[genius;Ayaka]
`
});
```
