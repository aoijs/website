---
title: '$forEachGuildChannel'
description: '$forEachGuildChannel wird erwartete Befehle in jedem Kanal der aktuellen Gilde ausführen.'
id: forEachGuildChannel
---

`$forEachGuildChannel` wird erwartete Befehle in jedem Kanal der aktuellen Gilde ausführen.

## Verwendung

```php
$forEachGuildChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Verwendung

| Feld           | Typ    | Beschreibung                                                                     | Erforderlich |
| -------------- | ------ | -------------------------------------------------------------------------------- |:------------:|
| Zeit           | string | Wie lange dauert es zwischen den einzelnen Kanälen, um den nächsten auszuführen. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                                                                 |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.                                                 |     wahr     |
| endCmd         | string | Erwartetes Kommando das ausgeführt wird, wenn die Schleife endet.                |     wahr     |

## Beispiel(e)

Dies ändert den Variablenwert jedes Gildenkanals in "test":

```javascript
bot.command({
    Name: "forEachGuildChannel",
    Code: `
  $forEachGuildChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

Bot. waitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```