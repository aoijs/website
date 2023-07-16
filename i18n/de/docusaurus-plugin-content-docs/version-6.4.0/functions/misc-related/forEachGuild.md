---
title: '$forEachGuild'
description: '$forEachGuild wird in jeder Gilde gewartete Befehle ausführen.'
id: forEachGuild
---

`$forEachGuild` wird in jeder Gilde gewartete Befehle ausführen.

## Verwendung

```php
$forEachGuild[time;awaitData;...awaitedCmds;endCmd]
```

## Verwendung

| Feld           | Typ    | Beschreibung                                                                   | Erforderlich |
| -------------- | ------ | ------------------------------------------------------------------------------ |:------------:|
| Zeit           | string | Wie lange dauert es zwischen den einzelnen Gilden, um die nächste auszuführen. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                                                               |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.                                               |     wahr     |
| endCmd?        | string | Erwartetes Kommando das ausgeführt wird, wenn die Schleife endet.              |     wahr     |

## Beispiel(e)

Dies ändert den Variablenwert jeder Gilde in "test":

```javascript
bot.command({
    Name: "forEachGuild",
    Code: `
  $forEachGuild[2s;{"value": "test"};awaitedCommand;]
  `
});

Bot. waitedCommand({
    name: "awaitedCommand",
    code: `
  $setGuildVar[varname;$awaitData[value];$guildID]
  `
});
```