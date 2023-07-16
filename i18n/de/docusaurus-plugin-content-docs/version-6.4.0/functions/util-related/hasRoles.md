---
title: $hasRoles
description: '$hasRoles überprüfen, ob der angegebene Benutzer die Rollen im Rollenargument hat.'
id: hasRoles
---

`$hasRoles` überprüfen, ob der angegebene Benutzer die Rollen im Rollenargument hat.

## Verwendung

```php
$hasRoles[guildID;userID;...roles]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                    | Erforderlich |
| --------- | ---------- | ----------------------------------------------- |:------------:|
| guildID   | ganze Zahl | ID der Gilde, in der die Rollen vorhanden sind. |     wahr     |
| userID    | ganze Zahl | ID des Benutzers, der die Rollen hat.           |     wahr     |
| ...Rollen | ganze Zahl | Die Rollen, auf die überprüft wird.             |     wahr     |

## Beispiel(e)

Dies gibt `true` zurück, wenn der Benutzer die aufgeführten Rollen hat:

```javascript
bot.command({
    name: 'hasRoles',
    code: `
  $hasRoles[$guildID;$authorID;$findRole[Owner]]
  `
});
```
