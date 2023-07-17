---
title: '$pruneMembers'
description: '$pruneMembers expulsará a todos los usuarios inactivos que hayan estado inactivos durante un cierto tiempo.'
id: pruneMembers
---

`$pruneMembers` expulsará a todos los usuarios inactivos que hayan estado inactivos durante un período de tiempo determinado.

## Uso

```php
$pruneMembers[días;servidorID?;rolesIDs?;seco?;razon?;volverCuenta?]
```

## Parámetros

| Campo         | Tipo           | Parámetros                                                                                                        | Requerido |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------- |:---------:|
| días          | número         | Número de días para contar para la poda (1-30, 7 por defecto).                                                    | verdadero |
| servidorID?   | entero         | Donde los miembros van a ser podados.                                                                             |   falso   |
| rolesIDs?     | entero, cadena | Rol para incluir, dividido por comas.                                                                             |   falso   |
| seco?         | booleano       | 1. **true** <br /> 2. **false** (por defecto)                                                               |   falso   |
| ¿razón?       | cadena         | Razón que se mostrará en los registros de auditoría del gremio.                                                   |   falso   |
| volverCuenta? | booleano       | Número de devoluciones de miembros podados. <br /> 1. **Verdadero** <br /> 2. **falso** (por defecto) |   falso   |

## Ejemplo(s)

Esto eliminará a todos los miembros que han estado inactivos durante 4 días y devolverá el recuento de los miembros eliminados que cumplen con esos requisitos:

```javascript
bot.command({
    name: 'pruneMembers',
    code: `
   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]
  `
});
```