---
title: '$stringEndsWith'
description: '$stringEndsWith will check if the given argument ends with something specific.'
id: stringEndsWith
---

`$stringEndsWith` will check if the given argument ends with something specific.

## الاستخدام

```php
$stringEndsWith[text;check]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                           | مطلوب |
| ----- | ------ | ---------------------------------------------------------------------- |:-----:|
| text  | string | The text that will be checked.                                         | true  |
| check | string | The argument that will check if the text ends with something specific. | true  |

## مثال

This will return `true` as `aoi.js` ends with `js`:

```javascript
bot.command({
    name: 'stringEndsWith',
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```