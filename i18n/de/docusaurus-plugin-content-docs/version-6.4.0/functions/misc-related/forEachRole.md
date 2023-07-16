---
title: $forEachRole
description: '$forEachRole wird erwartete Befehle für jede Rolle in einer bestimmten Gilde ausführen.'
id: forEachRole
---

`$forEachRole` wird erwartete Befehle für jede Rolle in einer bestimmten Gilde ausführen.

## Verwendung

```php
$forEachRole[guildID;time;awaitData;...awaitedCmds;endCmd]
```

## Verwendung

| Feld           | Typ    | Beschreibung                                                                       | Erforderlich |
| -------------- | ------ | ---------------------------------------------------------------------------------- |:------------:|
| Zeit           | string | Wie lange dauert es zwischen den einzelnen Rollen bis die nächste ausgeführt wird. |     wahr     |
| warte Daten    | objekt | Gewartete Daten.                                                                   |     wahr     |
| ...warten Cmds | string | Erwartete Befehle zum Ausführen.                                                   |     wahr     |
| endCmd         | string | Erwartetes Kommando das ausgeführt wird, wenn die Schleife endet.                  |     wahr     |