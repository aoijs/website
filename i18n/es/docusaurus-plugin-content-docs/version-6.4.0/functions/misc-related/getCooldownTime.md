---
title: '$getCooldownTime'
description: '$getCooldownTime will return the cooldown time of a given command.'
id: getCooldownTime
---

`$getCooldownTime` will return the cooldown time of a given command.

## Uso

```php
$getCooldownTime[time;type;command;id]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                                                                                              | Requerido |
| ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| tiempo  | consulta | The time of the cooldown.                                                                                                                               | verdadero |
| tipo    | consulta | Cooldown type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** <br /> 5. **static** | verdadero |
| command | string   | Command name.                                                                                                                                           |    sí     |
| id      | entero   | User/guild/channel/message ID.                                                                                                                          |    sí     |

## Ejemplo(s)

This will return the remaining cooldown of the "getCooldownTime" command:

```javascript
bot.command({
    name: "getCooldownTime",
    code: `
    $cooldown[2m;]
    $getCooldownTime[2m;user;getCooldownTime;$authorID]
    `
});
```