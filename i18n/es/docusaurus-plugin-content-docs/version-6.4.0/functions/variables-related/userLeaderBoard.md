---
title: '$userLeaderBoard'
description: '$userLeaderBoard devolverá una tabla de clasificación de una variable de usuario.'
id: userLeaderBoard
---

`$userLeaderBoard` devolverá una tabla de clasificación de una variable de usuario.

## Uso

```php
$userLeaderBoard[guildID;variable;order?;custom?;list?;page?;table?]
```

## Parámetros

| Campo           | Tipo   | Descripción                                                                                                                  | Requerido |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| guildID         | entero | ID del gremio.                                                                                                               |    sí     |
| variable        | cadena | Nombre variable.                                                                                                             |    sí     |
| tipo?           | string | En qué orden será devuelto <br /> 1. **ascender** (ascendente / predeterminado) <br /> 2. **dsc** (descendiendo) |   falso   |
| ¿personalizado? | cadena | Formateando.                                                                                                                 |   falso   |
| lista?          | número | Cuántos listar.                                                                                                              |   falso   |
| ¿página?        | número | Qué página listar.                                                                                                           |   falso   |
| tabla?          | string | Tabla variable.                                                                                                              |    no     |

| Opciones       | Devuelve       |                                                   |
| -------------- | -------------- | ------------------------------------------------- |
| **{top}**      | número         | Devuelve la posición del usuario.                 |
| **{username}** | cadena         | Devuelve el nombre de usuario.                    |
| **{tag}**      | cadena         | Devuelve el nombre de usuario y el discriminador. |
| **{id}**       | entero         | Devuelve el ID de usuario.                        |
| **{value}**    | número, entero | Devuelve el valor de la variable.                 |

## Ejemplo(s)

Esto devolverá una tabla de clasificación de la variable "Ejemplo":

```javascript
bot.command({
    name: "userLeaderBoard",
    code: `
    $userLeaderBoard[$guildID;Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```
