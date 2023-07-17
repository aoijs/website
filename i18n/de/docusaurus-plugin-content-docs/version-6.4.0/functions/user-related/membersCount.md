---
title: $membersCount
description: '$membersCount wird die Anzahl der Gilden zurückgeben.'
id: membersCount
---

`$membersCount` wird die Anzahl der Gilden zurückgeben.

## Verwendung

```php
$membersCount[guildID?;presence?;countBot?]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                                                                                                                                                 | Erforderlich |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID?  | ganze Zahl | Die ID der Gilde.                                                                                                                                                            |    falsch    |
| anwesend? | string     | Die Anwesenheit der Benutzer <br /> 1. **alle** (Standard) <br /> 2. **dnd** <br /> 3. **Leerlauf** <br /> 4. **offline** <br /> 5. **online** |    falsch    |
| countBot? | boolean    | Bots zählen? <br /> 1. **true** (Standard) <br /> 2. **Falsch**                                                                                                  |    falsch    |

## Beispiel(e)

Dies gibt die Anzahl der Offline-Benutzer (einschließlich Bots) in deiner Gilde zurück:

```javascript
bot.command({
    name: 'membersCount',
    code: `
  $membersCount[$guildID;offline;true]
  `
});
```
