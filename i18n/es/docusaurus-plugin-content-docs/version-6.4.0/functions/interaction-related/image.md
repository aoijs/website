---
title: $image
description: '$image añadirá una imagen a un incrustado.'
id: image
---

`$image` añadirá una imagen a un incrustado.

## Uso

```php
$image[índice?;URL]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                      | Requerido |
| ------- | -------- | ----------------------------------------------- |:---------:|
| índice? | número   | Incorporar índice                               |    no     |
| URL     | consulta | Introduce la URL de la imagen (imagen inferior) | verdadero |

## Ejemplo(s)

Esto creará un incrustado con una imagen, título y pie de página:

```javascript
bot.command({
    name: 'embed',
    code: `
  $title[Hello!]
  $image[$userAvatar]
  $footer[Hello again!;$userAvatar]
  `
});
```