---
title: '$forEachChannel'
description: '$forEachChannel wird erwartete Befehle in jedem Kanal jeder Gilde ausführen.'
id: forEachChannel
---

`$forEachChannel` wird erwartete Befehle in jedem Kanal jeder Gilde ausführen.

## Verwendung

```php
$forEachChannel[time;awaitData;...awaitedCmds;endCmd]
```

## Verwendung

| Feld           | Typ    | Beschreibung                                                                     | Erforderlich |
| -------------- | ------ | -------------------------------------------------------------------------------- |:------------:|
| Zeit           | string | Wie lange dauert es zwischen den einzelnen Kanälen, um den nächsten auszuführen. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                                                                 |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.                                                 |     wahr     |
| endCmd         | string | Erwartetes Kommando das ausgeführt wird, wenn die Schleife endet.                |     wahr     |

## Beispiel(e)

Dies ändert den Variablenwert jedes Kanals in "test":

```javascript
bot.command({
    Name: "forEachChannel",
    Code: `
  $forEachChannel[2s;{"value": "test"};awaitedCommand;]
  `
});

Bot. waitedCommand({
    name: "awaitedCommand",
    code: `
  $setChannelVar[varname;$awaitData[value];$channelID]
  `
});
```