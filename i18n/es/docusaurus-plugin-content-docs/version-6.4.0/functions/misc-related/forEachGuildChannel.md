---
title: '$forEachGuildChannel'
description: '$forEachGuildChannel will execute awaited commands in every channel of the current guild.'
id: forEachGuildChannel
---

`$forEachGuildChannel` will execute awaited commands in every channel of the current guild.

## Modo de uso

```php
$forEachGuildChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                  | Requerido |
| -------------- | -------- | ----------------------------------------------------------- |:---------:|
| tiempo         | consulta | How long it takes between each channel to execute the next. | verdadero |
| awaitData      | object   | Datos esperados.                                            | verdadero |
| ...awaitedCmds | string   | Awaited Commands to execute.                                |    sí     |
| endCmd         | string   | Awaited Command to execute when loop ends.                  |    sí     |

## Ejemplo(s)

This will change the variable value of each guild channel to "test":

```javascript
bot.command({
    name: "forEachGuildChannel",
    code: `
  $forEachGuildChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```