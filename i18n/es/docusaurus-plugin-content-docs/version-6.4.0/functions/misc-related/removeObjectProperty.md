---
title: '$removeObjectProperty'
description: '$removeObjectProperty will remove a property of an object.'
id: removeObjectProperty
---

`$removeObjectProperty` will remove a property of an given object.

## Uso

```php
$removeObjectProperty[property;object]
```

## Parámetros

| Campo    | Tipo     | Parámetros            | Requerido |
| -------- | -------- | --------------------- |:---------:|
| property | consulta | Name of the property. | verdadero |
| object   | object   | The object.           | verdadero |

## Ejemplo(s)

This will remove `Ferel` from the given object:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```
