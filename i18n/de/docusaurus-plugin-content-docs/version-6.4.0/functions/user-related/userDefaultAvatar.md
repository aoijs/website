---
title: $userDefaultAvatar
description: '$userDefaultAvatar wird den Discord User Avatar des angegebenen Benutzers zurückgeben.'
id: userDefaultAvatar
---

`$userDefaultAvatar` wird den Discord User Avatar des angegebenen Benutzers zurückgeben.

## Verwendung

```php
$userDefaultAvatar[userID?]
```

## Verwendung

| Feld    | Typ        | Beschreibung          | Erforderlich |
| ------- | ---------- | --------------------- |:------------:|
| userID? | ganze Zahl | Die ID des Benutzers. |    falsch    |

## Beispiel(e)

Dies gibt deinen Standard Discord Benutzer Avatar zurück:

```javascript
bot.command({
    name: 'userDefaultAvatar',
    code: `
  $userDefaultAvatar[$authorID]
  `
});
```
