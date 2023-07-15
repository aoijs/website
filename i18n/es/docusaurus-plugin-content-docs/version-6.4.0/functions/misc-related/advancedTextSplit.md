---
title: '$advancedTextSplit'
description: '$advancedTextSplit dividirá varios argumentos dados.'
id: advancedTextSplit
---

`$advancedTextSplit` dividirá varios argumentos determinados.

## Uso

```php
$advancedTextSplit[texto;sep;indice;sep?;indice?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                         | Requerido |
| ------ | -------- | -------------------------------------------------- |:---------:|
| text   | consulta | Texto a dividir.                                   | verdadero |
| sep    | consulta | Separador que se utiliza para dividir los valores. | verdadero |
| índice | entero   | La posición del texto que desea ser retornado.     | verdadero |

## Ejemplo(s)

Esto dividirá `Hello` de `Bye` y devuelve `Hello`:

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `
});
```
