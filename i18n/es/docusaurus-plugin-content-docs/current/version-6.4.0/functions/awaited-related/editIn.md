---
title: '$editIn'
description: '$editIn editará un mensaje después de un tiempo determinado.'
id: editIn
---

`$editIn` editará un mensaje después de un tiempo determinado.

## Uso

```php
$editIn[tiempo;...contenido]
```

## Parámetros

| Campo     | Tipo           | Descripción                                       | Requerido |
| --------- | -------------- | ------------------------------------------------- |:---------:|
| tiempo    | cadena, número | Después de cuánto tiempo se eliminará el mensaje. | verdadero |
| contenido | cadena         | Cuál debe ser el nuevo contenido del mensaje.     | verdadero |

## Ejemplo(s)

Esto eliminará el mensaje enviado después de cinco segundos:

```javascript
bot.command({
    name: 'editIn',
    code: `
  $editIn[5s;aoi.js is great, don't you agree?;Yes, I do!]
  ¡Editaré este mensaje en 5 segundos!

  `
});
```
