---
title: $userExists
description: '$userExists wird prüfen, ob ein bestimmter Benutzer existiert.'
id: userExists
---

`$userExists` wird überprüfen, ob ein bestimmter Benutzer existiert.

## Verwendung

```php
$userExists[userID?]
```

## Verwendung

| Feld    | Typ        | Beschreibung     | Erforderlich |
| ------- | ---------- | ---------------- |:------------:|
| userID? | ganze Zahl | Die Benutzer-ID. |    falsch    |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob der Benutzer existiert, in diesem Beispiel unten wird es `true` zurückgeben, da du als Discord Benutzer existierst:

```javascript
bot.command({
    name: 'userExists',
    code: `
  $userExists[$authorID]
  `
});
```
