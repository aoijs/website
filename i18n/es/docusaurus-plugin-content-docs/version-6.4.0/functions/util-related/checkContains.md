---
title: '$checkContains'
description: '$checkContains comprobará si los argumentos dados están presentes dentro de un texto.'
id: checkContains
---

`$checkContains` comprobará si los argumentos dados están presentes dentro del texto.

## Uso

```php
$checkContains[texto;...chars]
```

## Parámetros

| Campo      | Tipo     | Parámetros                 | Requerido |
| ---------- | -------- | -------------------------- |:---------:|
| text       | consulta | Texto que desea comprobar. | verdadero |
| caracteres | cadena   | Texto que desea comprobar. | verdadero |

## Ejemplo(s)

Esto devolverá `true` como `easy` y/o `simple` están presentes en el texto dado:

```javascript
bot.command({
    name: 'checkContains',
    code: `
  $checkContains[aoi.js is easy and simple to use for beginners;easy;simple]
  `
});
```
