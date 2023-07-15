---
title: '$forEachUser'
description: '$forEachUser will execute awaited commands for user across all guilds.'
id: forEachUser
---

`$forEachUser` will execute awaited commands for user across all guilds.

## Modo de uso

```php
$forEachUser[time;awaitData;...awaitedCmds;endCmd]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                   | Requerido |
| -------------- | -------- | ------------------------------------------------------------ |:---------:|
| tiempo         | consulta | How long it takes between each user to execute the next one. | verdadero |
| awaitData      | object   | Datos esperados.                                             | verdadero |
| ...awaitedCmds | string   | Awaited Commands to execute.                                 |    sí     |
| endCmd         | string   | Awaited Command to execute when loop ends.                   |    sí     |

## Ejemplo(s)

This will log every (cached) user in your console:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachUser[1;{};returnUsers;]
  `
});

bot.awaitedCommand({
  name: "returnUsers",
  code: `
  $log[ $authorID ]
  `
});
```
