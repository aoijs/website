---
title: '$setRolePosition'
description: '$setRolePosition will set a roles'' position.'
id: setRolePosition
---

`$setRolePosition` will set a roles' position.

## Modo de uso

```php
$setRolePosition[roleID;position;guildID?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                              | Requerido |
| ----------- | ------ | ------------------------------------------------------- |:---------:|
| roleID      | entero | The ID of the role to modify.                           | verdadero |
| position    | número | The new position of the role. (1 being the very bottom) | verdadero |
| servidorID? | entero | The ID of the guild of where the role is located in.    |   falso   |

## Ejemplo(s)

This will change a random role's position to `1` (the bot's highest role must be above that role):

```javascript
bot.command({
    name: 'setRolePosition',
    code: `
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```