---
title: $guildLeaderBoard
description: '$guildLeaderboard devolverá una tabla de clasificación de una variable de gremio.'
id: guildLeaderBoard
---

`$guildLeaderboard` devolverá una tabla de clasificación de una variable del gremio.

## Uso

```php
$guildLeaderboard[variable;type?;custom?;list?;page?;table?]
```

## Parámetros

| Campo           | Tipo   | Descripción                                                                                                                  | Requerido |
| --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| variable        | string | Nombre variable.                                                                                                             |    sí     |
| type            | string | En qué orden será devuelto <br /> 1. **ascender** (ascendente / predeterminado) <br /> 2. **dsc** (descendiendo) |   falso   |
| ¿personalizado? | string | Formateando.                                                                                                                 |    no     |
| lista?          | número | Cuántos listar.                                                                                                              |    no     |
| ¿página?        | número | Qué página listar.                                                                                                           |    no     |
| tabla?          | string | Tabla variable.                                                                                                              |    no     |

| Opciones    | Devuelve       |                                              |
| ----------- | -------------- | -------------------------------------------- |
| **{top}**   | número         | Devuelve la posición del usuario del gremio. |
| **{name}**  | cadena         | Devuelve el nombre de usuario.               |
| **{id}**    | entero         | Devuelve el ID del gremio.                   |
| **{value}** | número, entero | Devuelve el valor de la variable.            |

## Ejemplo(s)

Esto devolverá una tabla de clasificación de la variable "Ejemplo":

```javascript
bot.command({
    name: "guildLeaderboard",
    code: `
    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]
    `
});
```
