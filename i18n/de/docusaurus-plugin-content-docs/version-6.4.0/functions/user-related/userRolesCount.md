---
title: $userRolesCount
description: '$userRolesCount gibt die Rollenanzahl eines Benutzers zurück.'
id: userRolesCount
---

`$userRolesCount` gibt die Rollenanzahl eines Benutzers zurück.

## Verwendung

```php
$userRolesCount[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung     | Erforderlich |
| -------- | ---------- | ---------------- |:------------:|
| userID?  | ganze Zahl | Die Benutzer-ID. |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID.   |    falsch    |

## Beispiel(e)

Dadurch wird die Anzahl der von Ihnen zugewiesenen Rollen zurückgegeben:

```javascript
bot.command({
    name: 'userRolesCount',
    code: `
  $userRolesCount[$authorID;$guildID]
  `
});
```
