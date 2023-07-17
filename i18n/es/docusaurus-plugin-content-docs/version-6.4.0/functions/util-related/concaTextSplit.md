---
title: $concaTextSplit
description: '$concatTextSplit concatenará el texto con el separador dado.'
id: concaTextSplit
---

`$concatTextSplit` concatena el texto con el separador dado.

## Uso

```php
$concatTextSplit[...texto]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                | Requerido |
| ----- | ------ | --------------------------------------------------------- |:---------:|
| texto | cadena | Texto a concatenar con los elementos textSdid existentes. | verdadera |

## Ejemplo(s)

Esto añadirá `Hello, Bye` al argumento ya utilizado `$textSplit`:

```javascript
bot.command({
    name: 'concatTextSplit',
    code: `
  $concatTextSplit[Hello;Bye]
  $textSplit[Goodmorning, Goodnight;, ]
  `
});
```
