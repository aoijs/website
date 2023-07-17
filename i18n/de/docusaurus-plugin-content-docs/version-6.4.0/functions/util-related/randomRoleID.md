---
title: '$randomRoleID'
description: '$randomRoleID gibt eine zufällige Rollen-ID einer bestimmten Gilde zurück.'
id: randomRoleID
---

`$randomRoleID` gibt eine zufällige Rollen-ID einer bestimmten Gilde zurück.

## Verwendung

```php
$randomRoleID[guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                  | Erforderlich |
| -------- | ---------- | --------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Wo wird die zufällige Rolle ID zurückgegeben. |     wahr     |

## Beispiel(e)

Dies gibt eine zufällige Rolle ID deiner Gilde zurück:

```javascript
bot.command({
    name: 'randomRoleID',
    code: `
  $randomRoleID[$guildID]
  `
});
```
