---
title: $stringEndsWith
description: '$stringEndsWith comprobará si el argumento dado termina con algo específico.'
id: stringEndsWith
---

`$stringEndsWith` comprobará si el argumento dado termina con algo específico.

## Uso

```php
$stringEndsWith[text;check]
```

## Parámetros

| Campo     | Tipo     | Parámetros                                                           | Requerido |
| --------- | -------- | -------------------------------------------------------------------- |:---------:|
| text      | consulta | El texto que se comprobará.                                          | verdadero |
| comprobar | consulta | El argumento que comprobará si el texto termina con algo específico. | verdadero |

## Ejemplo(s)

Esto devolverá `verdadero` como `aoi.js` termina con `js`:

```javascript
bot.command({
    name: 'stringEndsWith',
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```