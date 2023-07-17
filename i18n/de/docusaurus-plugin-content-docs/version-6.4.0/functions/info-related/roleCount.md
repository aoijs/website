---
title: $roleCount
description: '$roleCount wird die Rolle der Gilde zurückgeben.'
id: roleCount
---

`$roleCount` wird die Rolle der Gilde zurückgeben.

## Verwendung

```php
$roleCount[guildID?;fetchFirst?]
```

## Verwendung

| Feld            | Typ        | Beschreibung                                                                                                                   | Erforderlich |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| guildID?        | ganze Zahl | Die ID der Gilde.                                                                                                              |    falsch    |
| zuerst abrufen? | boolean    | Die Rollen zuerst abrufen, bevor die Anzahl zurückgegeben wird?  <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies gibt die Anzahl der Rollen deiner Gilde zurück:

```javascript
bot.command({
    name: 'roleCount',
    code: `
  $roleCount[$guildID;true]
  `
});
```