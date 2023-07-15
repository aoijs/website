---
title: '$addObjectProperty'
description: '$addObjectProperty añadirá una propiedad a un objeto existente.'
id: addObjectProperty
---

$addObjectProperty añadirá una propiedad a un objeto existente.

## Uso

```php
$addObjectProperty[nombre;valor]
```

## Parámetros

| Campo  | Tipo     | Parámetros              | Requerido |
| ------ | -------- | ----------------------- |:---------:|
| nombre | consulta | Nombre de la propiedad. | verdadero |
| valor  | consulta | Valor de la propiedad.  | verdadero |

## Ejemplo(s)

Esto devolverá `Ferel` de la propiedad `Leref`

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
