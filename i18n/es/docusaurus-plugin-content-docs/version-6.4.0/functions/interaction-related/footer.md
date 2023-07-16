---
title: '$footer'
description: '$footer añadirá un pie de página a un incrustado.'
id: footer
---

`$footer` añadirá un pie de página a un incrustado.

## Uso

```php
$footer[indice?;contenido;URL del icono?]
```

## Parámetros

| Campo          | Tipo           | Parámetros                                          | Requerido |
| -------------- | -------------- | --------------------------------------------------- |:---------:|
| índice?        | número         | Incorporar índice.                                  |    no     |
| contenido      | cadena, número | Contenido del texto del pie de página.              | verdadero |
| URL del icono? | cadena         | Icono de pie de página (imagen inferior izquierda). |   falso   |

## Ejemplo(s)

Esto creará un incrustado con un pie de página y título:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $footer[Hello again!;$userAvatar]
  `
});
```