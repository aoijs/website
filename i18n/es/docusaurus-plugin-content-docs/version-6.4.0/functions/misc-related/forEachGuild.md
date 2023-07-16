---
title: '$forEachGuild'
description: '$forEachGuild will execute given awaited commands in every guild.'
id: forEachGuild
---

`$forEachGuild` will execute given awaited commands in every guild.

## Uso

```php
$forEachGuild[time;awaitData;...awaitedCmds;endCmd]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                | Requerido |
| -------------- | -------- | --------------------------------------------------------- |:---------:|
| tiempo         | consulta | How long it takes between each guild to execute the next. | verdadero |
| awaitData      | object   | Datos esperados.                                          | verdadero |
| ...awaitedCmds | string   | Awaited Commands to execute.                              |    sí     |
| endCmd?        | string   | Awaited Command to execute when loop ends.                |    sí     |

## Ejemplo(s)

This will change the variable value of each guild to "test":

```javascript
bot.command({
    name: "forEachGuild",
    code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `
});
```