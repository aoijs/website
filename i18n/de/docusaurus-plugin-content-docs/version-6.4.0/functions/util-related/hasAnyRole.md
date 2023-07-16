---
title: '$hasAnyRole'
description: '$hasAnyRole wird prüfen, ob der angegebene Benutzer eine der Rollen hat, die im Rollenargument aufgeführt sind.'
id: hasAnyRole
---

`$hasAnyRole` wird überprüfen, ob der angegebene Benutzer eine der Rollen hat, die im Rollenargument aufgeführt sind.

## Verwendung

```php
$hasAnyRole[guildID;userID;...roles]
```

## Verwendung

| Feld      | Typ        | Beschreibung                                    | Erforderlich |
| --------- | ---------- | ----------------------------------------------- |:------------:|
| guildID   | ganze Zahl | ID der Gilde, in der die Rollen vorhanden sind. |     wahr     |
| userID    | ganze Zahl | ID des Benutzers.                               |     wahr     |
| ...Rollen | ganze Zahl | Die Rollen, auf die überprüft wird.             |     wahr     |

## Beispiel(e)

Dies gibt `true` zurück, wenn der Benutzer eine der aufgeführten Rollen hat:

```javascript
bot.command({
    name: 'hasAnyRole',
    code: `
  $hasAnyRole[$guildID;$authorID;$findRole[Owner];$findRole[Admin]]
  `
});
```
