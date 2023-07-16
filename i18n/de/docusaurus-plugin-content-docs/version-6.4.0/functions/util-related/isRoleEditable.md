---
title: $isRoleEditable
description: '$isRoleEditable wird prüfen, ob die Rolle editierbar ist.'
id: isRoleEditable
---

`$isRoleEditable` wird überprüfen, ob die Rolle editierbar ist.

## Verwendung

```php
$isRoleEditable[roleID;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                     | Erforderlich |
| -------- | ---------- | ---------------------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | ID der Rolle, die Sie überprüfen möchten, ob sie editierbar ist. |     wahr     |
| guildID? | ganze Zahl | Die ID der Gilde, in der die Rolle existiert.                    |    falsch    |

## Beispiel(e)

Wird überprüft, ob eine Rolle mit dem Namen `Besitzer` editierbar ist:

```javascript
bot.command({
    name: 'isRoleEditable',
    code: `
  $isRoleEditable[$findRole[Owner];$guildID]
  `
});
```
