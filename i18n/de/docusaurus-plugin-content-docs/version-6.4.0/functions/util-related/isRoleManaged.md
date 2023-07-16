---
title: $isRoleManaged
description: '$isRoleManaged wird prüfen, ob eine bestimmte Rolle von Discord verwaltet wird.'
id: isRoleManaged
---

`$isRoleManaged` wird überprüfen, ob eine bestimmte Rolle von Discor verwaltet wird.

## Verwendung

```php
$isRoleManaged[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                            | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | ID der Rolle, die du überprüfen möchtest, ob sie von Discord verwaltet wird oder nicht. |     wahr     |
| guildID? | ganze Zahl | ID der Gilde, in der die Rolle existiert.                                               |    falsch    |

## Beispiel(e)

Dies wird überprüft, ob eine Rolle namens `Server Booster` von Discord verwaltet wird und entweder `true` oder `false` zurückgibt:

```javascript
bot.command({
    name: 'isRoleManaged',
    code: `
  $isRoleManaged[$findRole[Server Booster];$guildID]
  `
});
```
