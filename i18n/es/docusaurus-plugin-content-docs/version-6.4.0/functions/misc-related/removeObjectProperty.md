---
title: '$removeObjectProperty'
description: '$removeObjectProperty eliminará una propiedad de un objeto.'
id: removeObjectProperty
---

`$removeObjectProperty` eliminará una propiedad de un objeto determinado.

## Uso

```php
$removeObjectProperty[propiedad;objeto]
```

## Parámetros

| Campo     | Tipo   | Parámetros              | Requerido |
| --------- | ------ | ----------------------- |:---------:|
| propiedad | cadena | Nombre de la propiedad. | verdadero |
| objeto    | objeto | El objeto.              | verdadero |

## Ejemplo(s)

Esto eliminará `Ferel` del objeto dado:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```
