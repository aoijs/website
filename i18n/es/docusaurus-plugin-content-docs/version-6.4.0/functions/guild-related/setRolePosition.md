---
title: '$setRolePosition'
description: '$setRolePosition establecerá la posición de los roles.'
id: setRolePosition
---

`$setRolePosition` establecerá la posición de los roles.

## Uso

```php
$setRolePosition[rolID;posición;servidorID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                              | Requerido |
| ----------- | ------ | ------------------------------------------------------- |:---------:|
| rolID       | entero | El ID del rol a modificar.                              | verdadero |
| position    | número | La nueva posición del rol. (1 siendo la parte inferior) | verdadero |
| servidorID? | entero | El ID del gremio en el que se encuentra el rol.         |   falso   |

## Ejemplo(s)

Esto cambiará la posición de un rol aleatorio a `1` (el rol más alto del bot debe estar por encima de ese rol):

```javascript
bot.command({
    name: 'setRolePosition',
    code: `
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```