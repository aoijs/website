---
title: '$stringStartsWith'
description: '$stringStartsWith comprobará si el argumento dado comienza con algo específico.'
id: stringStartsWith
---

`$stringStartsWith` comprobará si el argumento dado comienza con algo específico.

## Uso

```php
$stringStartsWith[text;check]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                            | Requerido |
| --------- | -------- | --------------------------------------------------------------------- |:---------:|
| text      | consulta | El texto que se comprobará.                                           | verdadero |
| comprobar | consulta | El argumento que comprobará si el texto comienza con algo específico. | verdadero |

## Ejemplo(s)

Esto devolverá `verdadero` como `aoi.js` comienza con `aoi`:

```javascript
bot.command({
    name: 'stringStartsWith',
    code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```