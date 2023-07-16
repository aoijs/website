---
title: '$cropText'
description: '$cropText recortará el texto dado.'
id: cropText
---

`$cropText` se utiliza para recortar el texto dado.

## Uso

```php
$cropText[texto;límite;comenzar?]
```

## Parámetros

| Campo      | Tipo   | Parámetros                                                                            | Requerido |
| ---------- | ------ | ------------------------------------------------------------------------------------- |:---------:|
| texto      | cadena | Texto que quieres rebanar.                                                            | verdadero |
| límite     | número | El límite del texto recortado/comenzará a recortar cualquier texto que venga después. | verdadero |
| ¿comenzar? | número | Donde debe comenzar el cultivo.                                                       |   falso   |

## Ejemplo(s)

Esto devolverá `Bye` y eliminará `.Hello` del valor dado:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```
