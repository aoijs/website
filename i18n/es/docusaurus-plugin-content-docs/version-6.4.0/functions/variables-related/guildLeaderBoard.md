---
title: '$guildLeaderboard'
description: '$guildLeaderboard will return a leaderboard of a guild variable.'
id: guildLeaderboard
---

`$guildLeaderboard` will return a leaderboard of a guild variable.

## Uso

```php
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                                                             | Requerido |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |:---------:|
| variable | string | Variable name.                                                                                                          |    sí     |
| type     | string | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descendiendo) |   falso   |
| custom?  | string | Formatting.                                                                                                             |    no     |
| list?    | número | How many to list.                                                                                                       |    no     |
| page?    | número | Which page to list.                                                                                                     |    no     |
| table?   | string | Variable table.                                                                                                         |    no     |

| Opciones    | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | número          | Returns the user position of the guild. |
| **{name}**  | cadena          | Returns the user name.                  |
| **{id}**    | entero          | Returns the guild ID.                   |
| **{value}** | number, integer | Returns the variable value.             |

## Ejemplo(s)

This will returns a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
