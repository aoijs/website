---
title: '$uri'
description: '$uri will encode or decode an URL.'
id: uri
---

`$uri` will encode or decode an URL.

## Modo de uso

```php
$uri[text;type?]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                                                      | Requerido |
| ----- | -------- | ----------------------------------------------------------------------------------------------- |:---------:|
| text  | consulta | Text to encode/decode.                                                                          | verdadero |
| tipo? | consulta | What to do with the given text. <br /> 1. **encode** (default) <br /> 2. **decode** |    no     |

## Ejemplo(s)

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
