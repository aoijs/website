---
title: '$onlyForCategories'
description: '$onlyForCategories comprobará si el comando fue ejecutado en la categoría del canal de ejecución y devolverá un mensaje de error en caso contrario.'
id: onlyForCategories
---

`$onlyForCategories` comprobará si el comando fue ejecutado en la categoría del canal de ejecución y devolverá un mensaje de error si no.

## Uso

```php
$onlyForCategories[...categoryIds;error]
```

## Parámetros

| Campo             | Tipo            | Parámetros                                                                                 | Requerido |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------ |:---------:|
| ...categorías Ids | string, integer | Categorías a las que desea limitar el comando.                                             | verdadero |
| error             | consulta        | Error a devolver cuando el comando no fue ejecutado en ninguna de las categorías listadas. | verdadero |

## Ejemplo(s)

Esto limitará el comando sólo a las categorías de canales dadas:

```javascript
bot.command({
    nombre: "onlyForCategories",
    código: `
    Ok.
    $onlyForCategories[categoryID;categoryID;You can't use that command here!]
    `
});
```