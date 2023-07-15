---
title: '$stringStartsWith'
description: '$stringStartsWith will check if the given argument starts with something specific.'
id: stringStartsWith
---

`$stringStartsWith` will check if the given argument starts with something specific.

## الاستخدام

```php
$stringStartsWith[text;check]
```

## البارامترات

| Field | النوع  | الديسكبربشين                                                             | مطلوب |
| ----- | ------ | ------------------------------------------------------------------------ |:-----:|
| text  | string | The text that will be checked.                                           | true  |
| check | string | The argument that will check if the text starts with something specific. | true  |

## مثال

This will return `true` as `aoi.js` starts with `aoi`:

```javascript
bot.command({
    name: 'stringStartsWith',
    code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```