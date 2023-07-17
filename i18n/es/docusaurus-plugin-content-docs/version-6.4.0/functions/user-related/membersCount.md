---
title: '$membersCount'
description: '$membersCount devolverá el número de miembros de un gremio.'
id: membersCount
---

`$membersCount` devolverá el recuento de miembros de un gremio.

## Uso

```php
$membersCount[servidorID?;¿presencia?;ContarBot?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                                                                 | Requerido |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | ID del servidor.                                                                                                                                                           |   falso   |
| presencia   | cadena   | La presencia de los usuarios <br /> 1. **all** (por defecto) <br /> 2. **dnd** <br /> 3. **idle** <br /> 4. **offline** <br /> 5. **online** |   falso   |
| ContarBot?  | booleano | ¿Contar bots? <br /> 1. **true** (por defecto) <br /> 2. **false**                                                                                             |   falso   |

## Ejemplo(s)

Esto devolverá la cantidad de usuarios sin conexión (incluyendo bots) en tu gremio:

```javascript
bot.command({
    name: 'membersCount',
    code: `
  $membersCount[$guildID;offline;true]
  `
});
```
