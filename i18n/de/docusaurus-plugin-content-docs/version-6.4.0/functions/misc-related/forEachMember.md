---
title: '$forEachMember'
description: '$forEachMember wird erwartete Befehle für Benutzer innerhalb der aktuellen Gilde ausführen.'
id: forEachMember
---

`$forEachMember` wird erwartete Befehle für Benutzer innerhalb der aktuellen Gilde ausführen.

## Verwendung

```php
$forEachMember[time;awaitData;...awaitedCmds;endCmd]
```

## Verwendung

| Feld           | Typ    | Beschreibung                                                                        | Erforderlich |
| -------------- | ------ | ----------------------------------------------------------------------------------- |:------------:|
| Zeit           | string | Wie lange dauert es zwischen den einzelnen Mitgliedern, um das nächste auszuführen. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                                                                    |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.                                                    |     wahr     |
| endCmd         | string | Erhaltener Befehl, der ausgeführt wird, wenn die Schleife endet.                    |     wahr     |

## Beispiel(e)


```javascript
bot.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `
});

bot. waitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `
});
```