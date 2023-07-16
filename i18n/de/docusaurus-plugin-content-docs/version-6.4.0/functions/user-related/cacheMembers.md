---
title: '$cacheMembers'
description: '$cacheMembers wird alle Mitglieder einer Gilde cachen.'
id: cacheMembers
---

`$cacheMembers` wird alle Mitglieder einer Gilde cachen.

## Verwendung

```php
$cacheMembers[guildID?;returnCount?]
```

## Verwendung

| Feld          | Typ        | Beschreibung                                                                                             | Erforderlich |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------- |:------------:|
| guildID?      | ganze Zahl | Von welcher Gilde sollen die Mitglieder zwischengespeichert werden.                                      |    falsch    |
| zurückzählen? | boolean    | Gibt die gecachte Mitgliederanzahl zurück. <br /> 1. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies speichert alle Mitglieder der aktuellen Gilde und gibt die Anzahl der zwischengespeicherten Mitglieder zurück:

```javascript
bot.command({
    name: 'cacheMembers',
    code: `
  $cacheMembers[$guildID;true]
  `
});
```
