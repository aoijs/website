---
title: '$get'
description: '$get se utiliza para recuperar variables temporales.'
id: get
---

`$get` recuperará variables temporales almacenadas por `$let`.

## Uso

```php
$get[var]
```

## Parámetros

| Campo | Tipo   | Parámetros                             | Requerido |
| ----- | ------ | -------------------------------------- |:---------:|
| var   | cadena | Variable temporal que desea recuperar. | verdadera |

## Ejemplo(s)

Esto devolverá `Leref` de la propiedad `$let`

```javascript
bot.command({
    name: 'get',
    code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`
});
```
