---
title: '$textTrim'
description: '$textTrim eliminará todos los espacios extras, múltiples espacios después de un espacio y reemplazará aquellos con un solo espacio.'
id: textTrim
---

`$textTrim` eliminará todos los espacios adicionales, múltiples espacios después de un espacio y los reemplazará por un solo espacio.

## Uso

```php
$textTrim[text]
```

## Parámetros

| Campo | Tipo   | Parámetros           | Requerido |
| ----- | ------ | -------------------- |:---------:|
| text  | string | El texto a recortar. | verdadera |

## Ejemplo(s)

Esto eliminará cualquier espacio extra del texto dado, en este caso devolvería `Imagina un paquete de cadena.`:

```javascript
bot.command({
    name: "textTrim",
    code: `
    $textTrim[      Imagine a string package      ]
    `
});
```