---
title: $removeRole
description: '$removeRole wird eine bestimmte Rolle von einem bestimmten Mitglied entfernen.'
id: removeRole
---

`$removeRole` wird eine bestimmte Rolle von einem bestimmten Mitglied entfernen.

## Verwendung

```php
$removeRole[guildID;userID;roleID;reason?]
```

## Verwendung

| Feld    | Typ        | Beschreibung                                                      | Erforderlich |
| ------- | ---------- | ----------------------------------------------------------------- |:------------:|
| guildID | ganze Zahl | Die Gilden-ID, wo sich Benutzer und Rolle befinden.               |     wahr     |
| userID  | ganze Zahl | Die ID des Benutzers, dessen Rolle entfernt wird.                 |     wahr     |
| roleID  | ganze Zahl | Die ID der Rolle, die entfernt wird.                              |     wahr     |
| warum?  | string     | Der Grund, der in den Audit-Protokollen der Gilde angezeigt wird. |    falsch    |

## Beispiel(e)

Dies wird eine bestimmte Rolle von sich selbst entfernen (die Rolle muss unter der höchsten Rolle des Bots liegen):

```javascript
bot.command({
    name: 'removeRole',
    code: `
   $removeRole[$guildID;$authorID;roleID;Some reason.]`
});
```