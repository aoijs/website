---
title: '$globalUserLeaderBoard'
description: '$globalUserLeaderBoard devolverá una tabla de clasificación de una variable global de usuario.'
id: globalUserLeaderBoard
---

`$globalUserLeaderBoard` devolverá una tabla de clasificación de una variable global de usuario.

## Uso

```php
$globalUserLeaderBoard[variable;type?;custom?;list?;page?;table?]
```

## Parámetros

| Campo           | Tipo   | Descripción                                                                                                                  | Requerido |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| variable        | string | Nombre variable.                                                                                                             |    sí     |
| type            | cadena | En qué orden será devuelto <br /> 1. **ascender** (ascendente / predeterminado) <br /> 2. **dsc** (descendiendo) |   falso   |
| ¿personalizado? | string | Formateando.                                                                                                                 |    no     |
| lista?          | número | Cuántos listar.                                                                                                              |    no     |
| ¿página?        | número | Qué página listar.                                                                                                           |    no     |
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
    name: "globalUserLeaderBoard",
    code: `
    $globalUserLeaderBoard[Example;asc;{top} - {username} - {value};10;1;main]
    `
});
```