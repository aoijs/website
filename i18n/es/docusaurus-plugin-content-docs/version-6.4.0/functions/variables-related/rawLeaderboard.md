---
title: '$rawLeaderboard'
description: '$rawLeaderboard devolverá una tabla de clasificación del tipo dado.'
id: rawLeaderboard
---

`$rawLeaderboard` devolverá una tabla de clasificación del tipo dado.

## Uso

```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]
```

## Parámetros

| Campo           | Tipo   | Descripción                                                                                                                     | Requerido |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| variable        | cadena | Nombre variable.                                                                                                                |    sí     |
| type            | cadena | Tipo variable <br /> 1. **globalUser** <br /> 2. **usuario** <br /> 3. **servidor** <br /> 4. **canal** |    sí     |
| pedido          | string | En qué orden será devuelto <br /> 1. **ascender** (ascendente / predeterminado) <br /> 2. **dsc** (descendiendo)    |    sí     |
| ¿personalizado? | string | Formateando.                                                                                                                    |   falso   |
| lista?          | número | Cuántos listar.                                                                                                                 |    no     |
| ¿página?        | número | Qué página listar.                                                                                                              |    no     |
| tabla?          | string | Tabla variable.                                                                                                                 |    no     |

| Opciones    | Devuelve       |                                                   |
| ----------- | -------------- | ------------------------------------------------- |
| **{top}**   | número         | Devuelve la posición del usuario.                 |
| **{name}**  | cadena         | Devuelve el nombre de usuario.                    |
| **{tag}**   | cadena         | Devuelve el nombre de usuario y el discriminador. |
| **{id}**    | entero         | Devuelve el ID de usuario.                        |
| **{value}** | número, entero | Devuelve el valor de la variable.                 |

## Ejemplo(s)

Esto devolverá una tabla de clasificación de la variable "Ejemplo":

```javascript
bot.command({
    name: "rawLeaderboard",
    code: `
    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]
    `
});
```