---
title: '$advancedTextSplit'
description: '$advancedTextSplit will split multiple given arguments.'
id: advancedTextSplit
---

`$advancedTextSplit` will split multiple given arguments.

## Modo de uso

```php
$advancedTextSplit[text;sep;index;sep?;index?]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                        | Requerido |
| ------ | -------- | ------------------------------------------------- |:---------:|
| text   | consulta | Text to split.                                    | verdadero |
| sep    | consulta | Separator which is used to split the values.      | verdadero |
| índice | entero   | The position of the text you want to be returned. |    sí     |

## Ejemplo(s)

This will split `Hello` from `Bye` and return `Hello`:

```javascript
bot.command({
    name: 'advancedTextSplit',
    code: `
  $advancedTextSplit[Hello/Bye;/;1]
  `
});
```
