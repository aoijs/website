---
title: '$uri'
description: '$uri will encode or decode an URL.'
id: uri
---

`$uri` will encode or decode an URL.

## الاستخدام

```php
$uri[text;type?]
```

## البارامترات

| Field  | النوع  | الديسكبربشين                                                                                    | مطلوب |
| ------ | ------ | ----------------------------------------------------------------------------------------------- |:-----:|
| text   | string | Text to encode/decode.                                                                          | true  |
| النوع? | string | What to do with the given text. <br /> 1. **encode** (default) <br /> 2. **decode** | false |

## مثال

This will encode a given text:

```javascript
bot.command({
    name: 'encode',
    code: `
  $uri[aoi.js is great :);encode]
  `
});
```

This will decode a given text:

```javascript
bot.command({
    name: 'decode',
    code: `
  $uri[aoi.js%20is%20great%20%3A);decode]
  `
});
```
