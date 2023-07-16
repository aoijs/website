---
title: '$removeContains'
description: '$removeContains eliminará texto específico de un texto dado.'
id: removeContains
---

`$removeContains` eliminará texto específico de un texto dado.

## Uso

```php
$removeContains[contenido;...palabras]
```

## Parámetros

| Campo       | Tipo   | Parámetros                          | Requerido |
| ----------- | ------ | ----------------------------------- |:---------:|
| contenido   | cadena | Texto de dónde quitar las palabras. | verdadero |
| ...palabras | cadena | Texto a eliminar del texto.         | verdadero |

## Ejemplo(s)

Esto eliminará la palabra "aoi.js" del texto dado:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```