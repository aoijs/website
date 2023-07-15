---
title: '$globalUserLeaderBoard'
description: '$globalUserLeaderBoard will return a leaderboard of a global user variable.'
id: globalUserLeaderBoard
---

`$globalUserLeaderBoard` will return a leaderboard of a global user variable.

## Modo de uso

```php
$globalUserLeaderBoard[variable;type?;custom?;list?;page?;table?]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                                                             | Requerido |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |:---------:|
| variable | string | Variable name.                                                                                                          |    sí     |
| type     | cadena | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descendiendo) |   falso   |
| custom?  | string | Formatting.                                                                                                             |    no     |
| list?    | número | How many to list.                                                                                                       |    no     |
| page?    | número | Which page to list.                                                                                                     |    no     |
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
    name: "globalUserLeaderBoard",
    code: `
    $globalUserLeaderBoard[Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```