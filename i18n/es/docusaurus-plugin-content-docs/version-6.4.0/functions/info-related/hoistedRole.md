---
title: '$hoistedRole'
description: '$hoistedRole devolverá el rol separado mostrado más alto de un usuario.'
id: hoistedRole
---

`$hoistedRole` devolverá el rol separado mostrado más alto de un usuario.

## Modo de uso

```php
$hoistedRole[usarioID?;servidorID?;opción?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                                | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |:---------:|
| usarioID?   | entero | El ID del usuario.                                                                                                        |    no     |
| servidorID? | entero | ID del servidor.                                                                                                          |    no     |
| opción?     | string | La opción cómo devolver el rol <br /> 1. **name** <br /> 2. **id**  (por defecto) <br /> 3. **mention** |   falso   |

## Ejemplo(s)

Esto devolverá el nombre de su rol más alto mostrado por separado:

```javascript
bot.command({
    name: 'hoistedRole',
    code: `
  $hoistedRole[$authorID;$guildID;name]
  `
});
```
