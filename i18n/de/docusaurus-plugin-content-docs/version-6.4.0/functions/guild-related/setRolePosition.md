---
title: '$setRolePosition'
description: '$setRolePosition wird eine Rollenposition festlegen.'
id: setRolePosition
---

`$setRolePosition` setzt eine Rollenposition.

## Verwendung

```php
$setRolePosition[roleID;position;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                        | Erforderlich |
| -------- | ---------- | --------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | Die ID der zu ändernden Rolle.                      |     wahr     |
| position | anzahl     | Die neue Position der Rolle. (1 ist die Unterseite) |     wahr     |
| guildID? | ganze Zahl | Die ID der Gilde, in der sich die Rolle befindet.   |    falsch    |

## Beispiel(e)

Dies ändert die Position einer zufälligen Rolle auf `1` (die höchste Rolle des Bots muss über dieser Rolle liegen):

```javascript
bot.command({
    name: 'setRolePosition',
    code: `
   $setRolePosition[$randomRoleID;1;$guildID]`
});
```