---
title: '$uri'
description: '$uri will encode or decode an URL.'
id: uri
---

`$uri` will encode or decode an URL.

## Використання

```php
$uri[text;type?]
```

## Параметри

| Поле | Тип   | Опис                                                                                            | Обов'язковий |
| ---- | ----- | ----------------------------------------------------------------------------------------------- |:------------:|
| text | рядок | Text to encode/decode.                                                                          |     так      |
| тип? | рядок | What to do with the given text. <br /> 1. **encode** (default) <br /> 2. **decode** |      ні      |

## Приклад(и)

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
