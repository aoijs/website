---
title: '$timeoutMember'
description: '$timeoutMember agotará a un miembro determinado usando la función de tiempo de espera de Discord.'
id: timeoutMember
---

`$timeoutMember` agotará un miembro determinado usando la función de tiempo de espera de Discord.

## Uso

```php
$timeoutMember[servidorID;Identificación de miembro;Temporizador;el tiempo de espera termina en?;razon?]
```

## Parámetros

| Campo                           | Tipo           | Parámetros                                                                                                               | Requerido |
| ------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------ |:---------:|
| servidorID                      | entero         | El ID del gremio donde se encuentra el miembro.                                                                          | verdadero |
| Identificación de miembro       | entero         | El ID del usuario que será desbloqueado.                                                                                 | verdadero |
| Temporizador                    | cadena, número | La duración del tiempo de espera.                                                                                        | verdadero |
| el tiempo de espera termina en? | booleano       | Devuelve el tiempo cuando finaliza el tiempo de espera. <br /> 1. **true** <br /> 2. **false** (por defecto) |   falso   |
| ¿razón?                         | cadena         | razón que se mostrará en los registros de auditoría del gremio.                                                          |   falso   |

## Ejemplo(s)

Esto agotará un miembro determinado durante cinco minutos:

```javascript
bot.command({
    name: 'timeoutMember',
    code: `
   $timeoutMember[$guildID;userID;5m;false]`
});
```