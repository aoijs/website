---
title: '$forEachRole'
description: '$forEachRole will execute awaited commands for every role in a given guild.'
id: forEachRole
---

`$forEachRole` will execute awaited commands for every role in a given guild.

## Modo de uso

```php
$forEachRole[guildID;time;awaitData;...awaitedCmds;endCmd]
```

## Parámetros

| Campo          | Tipo     | Parámetros                                               | Requerido |
| -------------- | -------- | -------------------------------------------------------- |:---------:|
| tiempo         | consulta | How long it takes between each role to execute the next. | verdadero |
| awaitData      | object   | Datos esperados.                                         | verdadero |
| ...awaitedCmds | string   | Awaited Commands to execute.                             |    sí     |
| endCmd         | string   | Awaited Command to execute when loop ends.               |    sí     |