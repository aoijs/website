---
title: $isUserDmEnabled
description: '$isUserDmEnabled wird überprüfen, ob die Direktnachrichten des Benutzers entweder deaktiviert oder aktiviert sind.'
id: isUserDmEnabled
---

`$isUserDmEnabled` wird überprüfen, ob die Direktnachrichten des Benutzers entweder deaktiviert oder aktiviert sind.

## Verwendung

```php
$isUserDmEnabled[userID]
```

## Verwendung

| Feld   | Typ        | Beschreibung                                                                          | Erforderlich |
| ------ | ---------- | ------------------------------------------------------------------------------------- |:------------:|
| userID | ganze Zahl | ID des Benutzers, den Sie überprüfen möchten, ob deren dms aktiviert sind oder nicht. |     wahr     |

## Beispiel(e)

Dies gibt entweder `true` oder `false` zurück, je nachdem, ob Ihre Direktnachrichten aktiviert oder deaktiviert sind:

```javascript
bot.command({
    Name: 'isUserDmEnabled',
    Code: `
  $isUserDmEnabled[$authorID]
  `
});
```
