---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf devolverá el índice del último elemento encontrado de la consulta.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` devolverá el índice del último elemento encontrado de la consulta.

## Uso

```php
$arrayLastIndexOf[nombre;consulta]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                   | Requerido |
| -------- | ------ | ----------------------------------------------------------------------------- |:---------:|
| nombre   | cadena | Nombre de matriz                                                              | verdadero |
| consulta | cadena | El elemento que estaremos consultando para cada elemento dentro de la matriz. | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "array-indexof",
    code: `
  $arrayLastIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;akarui;documents;bot]
  `
// Devolverá "3" ya que la palabra "akarui" está en la tercera posición de la matriz.

});
```