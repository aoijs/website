---
title: '$findSpecialChars'
description: '$findSpecialChars will return all special characters of the given argument.'
id: findSpecialChars
---

`$findSpecialChars` will return all special characters of the given argument.

## الاستخدام

```php
$findSpecialChars[text]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                    | مطلوب |
| ----- | ------ | ----------------------------------------------- |:-----:|
| text  | string | Text where you want to find special characters. | true  |

## مثال

This will return `######`:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
