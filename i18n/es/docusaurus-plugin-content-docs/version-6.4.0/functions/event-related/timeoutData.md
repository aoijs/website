---
title: '$timeoutData'
description: '$timeoutData contiene datos para los parámetros de datos de $setTimeout , esto estará vacío si se utiliza fuera de los códigos de timeoutCommand.'
id: timeoutData
---

`$timeoutData` contiene datos para parámetros de datos $setTimeout , esto estará vacío si se utiliza fuera de los códigos de timeoutCommand.

## Uso

```php
$timeoutData[opción]
```

## Parámetros

| Campo  | Tipo   | Descripción                                    | Requerido |
| ------ | ------ | ---------------------------------------------- |:---------:|
| opción | cadena | Nombre de la opción Datos de tiempo de espera. | verdadera |

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