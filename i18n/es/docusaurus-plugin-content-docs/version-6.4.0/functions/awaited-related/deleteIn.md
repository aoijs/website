---
title: '$deleteIn'
description: '$deleteIn eliminará un mensaje después de un tiempo determinado.'
id: deleteIn
---

`$deleteIn` eliminará un mensaje después de un tiempo determinado.

## Uso

```php
$deleteIn[tiempo]
```

## Parámetros

| Campo  | Tipo           | Descripción                                       | Requerido |
| ------ | -------------- | ------------------------------------------------- |:---------:|
| tiempo | cadena, número | Después de cuánto tiempo se eliminará el mensaje. | verdadero |

## Ejemplo(s)

Esto eliminará el mensaje enviado después de cinco segundos:

```javascript
bot.command({
    name: 'deleteIn',
    code: `
  $deleteIn[5s]
Borraré este mensaje en 5 segundos!
  `
});
```
