---
title: '$forEachUser'
description: '$forEachUser wird erwartete Befehle für Benutzer in allen Gilden ausführen.'
id: forEachUser
---

`$forEachUser` wird erwartete Befehle für Benutzer in allen Gilden ausführen.

## Verwendung

```php
$forEachUser[time;awaitData;...awaitedCmds;endCmd]
```

## Verwendung

| Feld           | Typ    | Beschreibung                                                           | Erforderlich |
| -------------- | ------ | ---------------------------------------------------------------------- |:------------:|
| Zeit           | string | Wie lange dauert es zwischen jedem Benutzer, den nächsten auszuführen. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                                                       |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.                                       |     wahr     |
| endCmd         | string | Erwartetes Kommando das ausgeführt wird, wenn die Schleife endet.      |     wahr     |

## Beispiel(e)

Dies protokolliert jeden (zwischengespeicherten) Benutzer in deiner Konsole:

```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachUser[1;{};returnUsers;]
  `
});

bot. waitedCommand({
  name: "returnUsers",
  code: `
  $log[ $authorID ]
  `
});
```
