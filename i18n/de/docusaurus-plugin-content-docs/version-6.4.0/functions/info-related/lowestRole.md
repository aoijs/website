---
title: $lowestRole
description: '$lowestRole gibt die niedrigste Rolle eines bestimmten Benutzers zurück.'
id: lowestRole
---

`$lowestRole` gibt die niedrigste Rolle eines bestimmten Benutzers zurück.

## Verwendung

```php
$lowestRole[userID?;guildID?]
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
    name: 'lowestRole',
    code: `
  $lowestRole[$authorID;$guildID]
  `
});
```
