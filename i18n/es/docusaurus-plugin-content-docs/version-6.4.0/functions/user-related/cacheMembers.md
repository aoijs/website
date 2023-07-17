---
title: '$cacheMembers'
description: '$cacheMembers almacenará en caché a todos los miembros de un gremio.'
id: cacheMembers
---

`$cacheMembers` cacheará a todos los miembros de un gremio.

## Uso

```php
$cacheMembers[servidorID?;volverCuenta?]
```

## Parámetros

| Campo         | Tipo     | Parámetros                                                                                                  | Requerido |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID?   | entero   | De qué gremio se almacenarán en caché los miembros.                                                         |   falso   |
| volverCuenta? | booleano | Devuelve el recuento de miembros en caché. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |

## Ejemplo(s)

Esto cacheará a todos los miembros de la guild actual y devolverá la cantidad de miembros cacheados:

```javascript
bot.command({
    name: 'cacheMembers',
    code: `
  $cacheMembers[$guildID;true]
  `
});
```
