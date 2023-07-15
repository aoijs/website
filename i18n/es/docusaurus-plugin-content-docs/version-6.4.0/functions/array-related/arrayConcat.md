---
title: '$arrayConcat'
description: <code>$arrayConcat</code> concatenará varios arrays.
id: arrayConcat
---

`$arrayConcat` concatenará varios arreglos.

## Modo de Uso

```php
$arrayConcat[separador;...arrays]
```

## Parámetros

| Campo     | Tipo    | Descripción       | Requerido |
| --------- | ------- | ----------------- |:---------:|
| separador | string  | Separador.        |    sí     |
| ...arrays | strings | Nombre del array. |    sí     |

## Ejemplo(s)

Este ejemplo va a devolver `Esto es un test` ya que concatena el array 1 y el array 2:

```javascript
bot.command({
    name: 'arrayConcat',
    code: `
  $arrayConcat[ ;test1;test2]
  $createArray[array1;Esto es]
  $createArray[array2;un test]
  `
});
```