---
title: '$roleCount'
description: '$roleCount devolverá el recuento de roles del servidor.'
id: roleCount
---

`$roleCount` devolverá el recuento de roles del servidor.

## Modo de uso

```php
$roleCount[servidorID?;obtenerPrimero?]
```

## Parámetros

| Campo           | Tipo    | Parámetros                                                                                                                  | Requerido |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID?     | entero  | ID del servidor.                                                                                                            |    no     |
| obtenerPrimero? | boolean | ¿Obtener primero los roles antes de devolver el recuento?  <br /> 1. **true** <br /> 2. **false** (por defecto) |    no     |

## Ejemplo(s)

Esto devolverá la cantidad de roles de tu gremio:

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```