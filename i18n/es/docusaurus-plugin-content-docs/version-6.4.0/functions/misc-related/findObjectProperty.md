---
title: '$findObjectProperty'
description: '$findObjectProperty buscará una propiedad determinada de un objeto y lo devolverá.'
id: findObjectProperty
---

`$findObjectProperty` buscará una determinada propiedad de un objeto y lo devolverá.

## Uso

```php
$findObjectProperty[propiedad;objeto]
```

## Parámetros

| Campo     | Tipo     | Parámetros              | Requerido |
| --------- | -------- | ----------------------- |:---------:|
| propiedad | consulta | Nombre de la propiedad. | verdadero |
| objeto    | objeto   | El objeto a buscar.     | verdadero |

## Ejemplo(s)

Esto devolverá `{"object": "property"}` ya que fue capaz de encontrar "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```
