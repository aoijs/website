---
title: '$removeContains'
description: '$removeContains will remove specific text from a give text.'
id: removeContains
---

`$removeContains` will remove specific text from a give text.

## Modo de uso

```php
$removeContains[content;...words]
```

## Parámetros

| Campo     | Tipo     | Parámetros                           | Requerido |
| --------- | -------- | ------------------------------------ |:---------:|
| contenido | consulta | Text where to remove the words from. | verdadero |
| ...words  | consulta | Text to remove from the text.        | verdadero |

## Ejemplo(s)

This will remove the word "aoi.js from the given text:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```