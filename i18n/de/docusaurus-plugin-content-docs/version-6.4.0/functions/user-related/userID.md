---
title: '$userID'
description: '$userID wird die ID eines bestimmten Benutzers zurückgeben.'
id: userID
---

`$userID` wird die ID eines bestimmten Benutzers zurückgeben.

## Verwendung

```php
$userID[user]
```

## Verwendung

| Feld     | Typ            | Beschreibung                                                               | Erforderlich |
| -------- | -------------- | -------------------------------------------------------------------------- |:------------:|
| benutzer | string, Nummer | Der Name des Benutzers, von dem die Benutzer-ID zurückgegeben werden soll. |     wahr     |

## Beispiel(e)

Dies gibt Ihre Benutzer-ID zurück:

```javascript
bot.command({
    name: 'userID',
    code: `
  $userID[$username]
  `
});
```
