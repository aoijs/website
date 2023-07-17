---
title: $removeRoles
description: '$removeRoles wird eine oder mehrere Rollen von einem bestimmten Mitglied entfernen.'
id: removeRoles
---

`$removeRoles` wird eine oder mehrere Rollen von einem bestimmten Mitglied entfernen.

## Verwendung

```php
$removeRoles[guildID;userID;reason?;...roleIDs]
```

## Verwendung

| Feld       | Typ        | Beschreibung                                                      | Erforderlich |
| ---------- | ---------- | ----------------------------------------------------------------- |:------------:|
| guildID    | ganze Zahl | Die Gilden-ID, wo sich Benutzer und Rolle befinden.               |     wahr     |
| userID     | ganze Zahl | Die ID des Benutzers, dessen Rolle entfernt wird.                 |     wahr     |
| warum?     | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |
| ...roleIDs | ganze Zahl | Die IDs der Rollen, die entfernt werden.                          |     wahr     |

## Beispiel(e)

Dies wird die angegebenen Rollen von sich selbst entfernen (die Rollen müssen unter der höchsten Rolle des Bots liegen):

```javascript
bot.command({
    name: 'removeRoles',
    code: `
   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`
});
```