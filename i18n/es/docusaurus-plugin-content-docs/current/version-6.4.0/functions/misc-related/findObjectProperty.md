---
title: '$findObjectProperty'
description: '$findObjectProperty will search for a given property of an object and return it.'
id: findObjectProperty
---

`$findObjectProperty` will search for a given property of an object and return it.

## Modo de uso

```php
$findObjectProperty[property;object]
```

## Parámetros

| Campo    | Tipo     | Parámetros            | Requerido |
| -------- | -------- | --------------------- |:---------:|
| property | consulta | Name of the property. | verdadero |
| object   | object   | The object to search. | verdadero |

## Ejemplo(s)

This will return `{"object": "property"}` as it was able to find "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```
