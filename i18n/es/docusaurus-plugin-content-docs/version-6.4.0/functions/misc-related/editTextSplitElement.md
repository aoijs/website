---
title: '$editTextSplitElement'
description: '$editTextSplitElement editará un elemento de división de texto específico.'
id: editTextSplitElement
---

`$editTextSplitElement` editará un elemento específico de división de texto.

## Uso

```php
$editTextSplitElement[indice;texto]
```

## Parámetros

| Campo  | Tipo     | Parámetros                             | Requerido |
| ------ | -------- | -------------------------------------- |:---------:|
| índice | consulta | Índice del elemento dividido en texto. | verdadero |
| text   | consulta | Nuevo elemento dividido en texto.      | verdadero |

## Ejemplo(s)

Esto editará el elemento dividido del tercer texto y lo cambiará a "Bien":

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```