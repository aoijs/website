---
title: $lowestRole
description: '$userLowestRole gibt die niedrigste Rolle eines bestimmten Benutzers zurück.'
id: lowestRole
---

`$userLowestRole` gibt die niedrigste Rolle eines bestimmten Benutzers zurück.

## Verwendung

```php
$userLowestRole[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                              | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | ID des Benutzers, von dem die niedrigste Rolle zurückgegeben werden soll. |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde.                                                         |    falsch    |

## Beispiel(e)

Dies gibt die ID Ihrer niedrigsten Rolle zurück:

```javascript
bot.command({
    name: 'userLowestRole',
    code: `
  $userLowestRole[$authorID;$guildID]
  `
});
```
