---
title: '$userLeaderBoard'
description: '$userLeaderBoard will return a leaderboard of a user variable.'
id: userLeaderBoard
---

`$userLeaderBoard` will return a leaderboard of a user variable.

## Uso

```php
$userLeaderBoard[guildID;variable;order?;custom?;list?;page?;table?]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                                                             | Requerido |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |:---------:|
| guildID  | entero | ID del gremio.                                                                                                          |    sí     |
| variable | cadena | Variable name.                                                                                                          |    sí     |
| tipo?    | string | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descendiendo) |   falso   |
| custom?  | cadena | Formatting.                                                                                                             |   falso   |
| list?    | número | How many to list.                                                                                                       |   falso   |
| page?    | número | Which page to list.                                                                                                     |   falso   |
| table?   | string | Variable table.                                                                                                         |    no     |

| Opciones       | Returns         |                                         |
| -------------- | --------------- | --------------------------------------- |
| **{top}**      | número          | Returns the position of the user.       |
| **{username}** | cadena          | Returns the username.                   |
| **{tag}**      | cadena          | Returns the username and discriminator. |
| **{id}**       | entero          | Returns the user ID.                    |
| **{value}**    | number, integer | Returns the variable value.             |

## Ejemplo(s)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "userLeaderBoard",
    code: `
    $userLeaderBoard[$guildID;Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```
