---
title: '$setTimeout'
description: '$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).'
id: setTimeout
---

`$setTimeout` will set a timeout for a given action (which will even continue to run after bot restart).

## Uso

```php
$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]
```

## Parámetros

| Campo       | Tipo           | Parámetros                                                             | Requerido |
| ----------- | -------------- | ---------------------------------------------------------------------- |:---------:|
| awaitedCmd  | consulta       | Awaited command to execute after duration ends.                        | verdadero |
| duration    | cadena, número | After how much time it will execute / this cannot go over **21 days**. | verdadero |
| timeoutData | object         | Timeout data.                                                          |    sí     |
| returnId?   | boolean        | Return timeout ID.                                                     |   falso   |
| pulse?      | número         | Pulse.                                                                 |    no     |

- You can retrieve timeout data using `$timeoutData[name]`.
- Note that the duration may not go over **21 days**.

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