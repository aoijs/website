---
title: '$getObjectProperty'
description: '$getObjectProperty devolverá una propiedad de un objeto dado.'
id: getObjectProperty
---

`$getObjectProperty` devolverá una propiedad de un objeto determinado.

## Uso

```php
$getObjectProperty[nombre]
```

## Parámetros

| Campo  | Tipo   | Parámetros                  | Requerido |
| ------ | ------ | --------------------------- |:---------:|
| nombre | string | Nombre del objeto a buscar. | verdadera |

## Ejemplo(s)

Esto devolverá el objeto creado en `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```