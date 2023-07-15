---
title: '$editTextSplitElement'
description: '$editTextSplitElement will edit a specific text split element.'
id: editTextSplitElement
---

`$editTextSplitElement` will edit a specific text split element.

## Modo de uso

```php
$editTextSplitElement[index;text]
```

## Parámetros

| Campo  | Tipo     | Parámetros                       | Requerido |
| ------ | -------- | -------------------------------- |:---------:|
| índice | consulta | Index of the text split element. | verdadero |
| text   | consulta | New text split element.          | verdadero |

## Ejemplo(s)

This will edit the 3rd text split element and change it to "Goodbye":

```javascript
bot.command({
    name: "editTextSplitElement",
    code: `
  $editTextSplitElement[3;Goodbye]
  $textSplit[Hello, Bye, Cya;, ]
  `
});
```