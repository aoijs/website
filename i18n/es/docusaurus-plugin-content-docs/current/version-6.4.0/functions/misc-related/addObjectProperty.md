---
title: '$addObjectProperty'
description: '$addObjectProperty will add a property to an existing object.'
id: addObjectProperty
---

`$addObjectProperty` will add a property to an existing object.

## Modo de uso

```php
$addObjectProperty[name;value]
```

## Parámetros

| Campo  | Tipo     | Parámetros             | Requerido |
| ------ | -------- | ---------------------- |:---------:|
| nombre | consulta | Name of the property.  | verdadero |
| value  | consulta | Value of the property. | verdadero |

## Ejemplo(s)

This will return `Ferel` from the `Leref` Property:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```
