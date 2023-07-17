---
title: '$usersBanned'
description: '$usersBanned devolverá los usuarios prohibidos de un gremio.'
id: usersBanned
---

`$usersBanned` devolverá los usuarios prohibidos de un gremio.

## Uso

```php
$usersBanned[servidorID?;fuerza?;opcion?;sep?]
```

## Parámetros

| Campo       | Tipo     | Parámetros                                                                                                                          | Requerido |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |:---------:|
| servidorID? | entero   | El ID del servidor.                                                                                                                 |   falso   |
| fuerza?     | booleano | 1. **true** <br /> 2. **false** (por defecto)                                                                                 |   falso   |
| opción?     | string   | Cómo devolver a los usuarios baneados <br /> 1. **id** (por defecto) <br /> 1. **username** <br /> 1. **mention** |   falso   |
| sep?        | string   | Separador para separar varios valores devueltos.                                                                                    |   falso   |

## Ejemplo(s)

Esto devolverá a los usuarios baneados de tu gremio como se menciona en un embebido:

```javascript
bot.command({
    name: 'usersBanned',
    code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
