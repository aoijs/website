---
title: $isMuted
description: '$isMuted wird prüfen, ob ein bestimmter Benutzer in einem Sprachkanal stumm ist.'
id: isMuted
---

`$isMuted` wird überprüfen, ob ein bestimmter Benutzer innerhalb eines Sprachkanals stumm ist.

## Verwendung

```php
$isMuted[userID?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                   | Erforderlich |
| -------- | ---------- | -------------------------------------------------------------- |:------------:|
| userID   | ganze Zahl | ID des Benutzers, den Sie überprüfen möchten, ob er stumm ist. |     wahr     |
| guildID? | ganze Zahl | ID der Gilde, in der der Benutzer stumm ist.                   |     wahr     |

## Beispiel(e)

Wird überprüft, ob du derzeit in einem Sprachkanal stumm bist und entweder `true` oder `false` zurückgibst:

```javascript
bot.command({
    name: 'isMuted',
    code: `
  $isMuted[$authorID;$guildID]
  `
});
```
