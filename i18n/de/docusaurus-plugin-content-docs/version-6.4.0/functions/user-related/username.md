---
title: $username
description: '$username wird den Benutzernamen eines Benutzers zurückgeben.'
id: username
---

`$username` wird den Benutzernamen eines Benutzers zurückgeben.

## Verwendung

```php
$username[userID?]
```

## Verwendung

| Feld    | Typ        | Beschreibung     | Erforderlich |
| ------- | ---------- | ---------------- |:------------:|
| userID? | ganze Zahl | Die Benutzer-ID. |    falsch    |

## Beispiel(e)

Damit wird Ihr Benutzername zurückgegeben:

```javascript
bot.command({
    name: 'username',
    code: `
  $username[$authorID]
  `
});
```
