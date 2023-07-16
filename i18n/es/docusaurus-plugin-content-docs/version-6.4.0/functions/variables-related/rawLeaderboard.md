---
title: '$rawLeaderboard'
description: '$rawLeaderboard will return a leaderboard of the given type.'
id: rawLeaderboard
---

`$rawLeaderboard` will return a leaderboard of the given type.

## Uso

```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]
```

## Parámetros

| Campo    | Tipo   | Descripción                                                                                                                  | Requerido |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| variable | cadena | Variable name.                                                                                                               |    sí     |
| type     | cadena | Variable type <br /> 1. **globalUser** <br /> 2. **user** <br /> 3. **server** <br /> 4. **channel** |    sí     |
| order    | string | In which order it will be returned <br /> 1. **asc** (ascending / default) <br /> 2. **dsc** (descendiendo)      |    sí     |
| custom?  | string | Formatting.                                                                                                                  |   falso   |
| list?    | número | How many to list.                                                                                                            |    no     |
| page?    | número | Which page to list.                                                                                                          |    no     |
| table?   | string | Variable table.                                                                                                              |    no     |

| Opciones    | Returns         |                                         |
| ----------- | --------------- | --------------------------------------- |
| **{top}**   | número          | Returns the position of the user.       |
| **{name}**  | cadena          | Returns the username.                   |
| **{tag}**   | cadena          | Returns the username and discriminator. |
| **{id}**    | entero          | Returns the user ID.                    |
| **{value}** | number, integer | Returns the variable value.             |

## Ejemplo(s)

This will return a leaderboard of the "Example" variable:

```javascript
bot.command({
    name: "rawLeaderboard",
    code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `
});
```