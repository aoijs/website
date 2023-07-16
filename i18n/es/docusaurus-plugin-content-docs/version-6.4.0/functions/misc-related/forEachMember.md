---
title: '$forEachMember'
description: '$forEachMember will execute awaited commands for user within the current guild.'
id: forEachMember
---

`$forEachMember` will execute awaited commands for user within the current guild.

## Uso

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                                 | Requerido |
| -------------- | -------- | ---------------------------------------------------------- |:---------:|
| tiempo         | consulta | How long it takes between each member to execute the next. | verdadero |
| awaitData      | object   | Datos esperados.                                           | verdadero |
| ...awaitedCmds | string   | Awaited Commands to execute.                               |    sí     |
| endCmd         | string   | Awaited command to execute when loop ends.                 |    sí     |

## Ejemplo(s)


```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

bot.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , es uno de los miembros de $awaitData[members]]
  `
});
```