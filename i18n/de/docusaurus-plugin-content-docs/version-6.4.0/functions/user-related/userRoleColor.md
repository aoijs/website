---
title: $userRoleColor
description: '$userRoleColor gibt die Rollenfarbe der am meisten zugewiesenen Rolle eines Benutzers zurück.'
id: userRoleColor
---

`$userRoleColor` gibt die Rollenfarbe der zugewiesenen Rolle eines Benutzers zurück.

## Verwendung

```php
$userRoleColor[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung     | Erforderlich |
| -------- | ---------- | ---------------- |:------------:|
| userID?  | ganze Zahl | Die Benutzer-ID. |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID.   |    falsch    |

## Beispiel(e)

Dies gibt die Farbe Ihrer höchsten Rolle zurück:

```javascript
bot.command({
    name: 'userRoleColor',
    code: `
  $userRoleColor[$authorID;$guildID]
  `
});
```
