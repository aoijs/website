---
title: $highestRole
description: '$userHighestRole devolverá el rol más alto de un usuario específico.'
id: highestRole
---

`$userHighestRole` devolverá el rol más alto de un usuario específico.

## Uso

```php
$userHighestRole[usarioID?;servidorID?;opción?]
```

## Parámetros

| Campo       | Tipo   | Parámetros                                                                                                               | Requerido |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |:---------:|
| usarioID?   | entero | El ID del usuario del que desea que se devuelva el rol más alto.                                                         |    no     |
| servidorID? | entero | ID del servidor.                                                                                                         |    no     |
| opción?     | string | La opción cómo devolver el rol <br /> 1. **name** <br /> 2. **id** (por defecto) <br /> 3. **mention** |   falso   |

## Ejemplo(s)

Esto devolverá el nombre de su rol más alto:

```javascript
bot.command({
    name: 'userHighestRole',
    code: `
  $userHighestRole[$authorID;$guildID;name]
  `
});
```
