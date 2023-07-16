---
title: '$setTimeout'
description: '$setTimeout establecerá un tiempo de espera para una acción determinada (que incluso continuará ejecutándose después de reiniciar el bot).'
id: setTimeout
---

`$setTimeout` establecerá un tiempo de espera para una acción determinada (que incluso continuará ejecutándose después de reiniciar el bot).

## Uso

```php
$setTimeout[esperadoCmd;duración;timeoutData;ID de retorno?;legumbres?]
```

## Parámetros

| Campo                     | Tipo           | Parámetros                                                            | Requerido |
| ------------------------- | -------------- | --------------------------------------------------------------------- |:---------:|
| Cmds esperados            | cadena         | Comando esperado para ejecutar cuando termine el bucle.               | verdadero |
| Duración                  | cadena, número | Después de cuánto tiempo ejecutará / esto no puede pasar **21 días**. | verdadero |
| datos de tiempo de espera | objeto         | Tiempo de espera de datos.                                            | verdadero |
| ID de retorno?            | boolean        | Devolver el tiempo de espera ID.                                      |   falso   |
| legumbres?                | número         | Legumbres.                                                            |   falso   |

- Puedes recuperar datos de tiempo de espera usando `$timeoutData[name]`.
- Tenga en cuenta que la duración no puede pasar **21 días**.

## Ejemplo(s)

Esto enviará "Hello!" después de 10 segundos en el canal de ejecución de comandos:

```javascript
bot.command({
    name: "setTimeout",
    code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

bot.timeoutCommand({
    name: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]
    `
});
```