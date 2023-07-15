---
title: '$getUserVar'
description: '$getUserVar will return the value of a given user variable.'
id: getUserVar
---

`$getUserVar` will return the value of a given user variable.

## Modo de uso

```php
$getUserVar[varname;userID?;id?;table?]
```

## Parámetros

| Campo     | Tipo            | Parámetros                                      | Requerido |
| --------- | --------------- | ----------------------------------------------- |:---------:|
| varname   | consulta        | Variable name.                                  | verdadero |
| usarioID? | entero          | User ID.                                        |    no     |
| id?       | string, integer | 1. **specific guild id** <br /> 2. **dm** |   falso   |
| table?    | string          | Variable table.                                 |   falso   |

## Ejemplo(s)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```