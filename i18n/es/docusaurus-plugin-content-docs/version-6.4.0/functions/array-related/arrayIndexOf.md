---
title: '$arrayIndexOf'
description: '$arrayIndexOf devolverá el índice del primer elemento encontrado de la consulta.'
id: arrayIndexOf
---

`$arrayIndexOf` devolverá el índice del primer elemento encontrado de la consulta.

## Uso

```php
$arrayIndexOf[nombre;consulta]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                   | Requerido |
| -------- | ------ | ----------------------------------------------------------------------------- |:---------:|
| nombre   | cadena | Nombre de matriz                                                              | verdadero |
| consulta | cadena | El elemento que estaremos consultando para cada elemento dentro de la matriz. | verdadero |

## Ejemplo(s)

```javascript
bot.command({
    name: "arrayIndexOf",
    code: `
  $arrayIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
// Devolverá "2" ya que la palabra "akarui" está en la segunda posición de la matriz.
});
```