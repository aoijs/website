---
title: $displayName
description: '$displayName gibt den Anzeigenamen eines bestimmten Benutzers zurück.'
id: displayName
---

`$displayName` gibt den Anzeigenamen eines bestimmten Benutzers zurück.

## Verwendung

```php
$displayName[guildID?;userID?;returnUser?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                               | Erforderlich |
| ------------ | ---------- | ------------------------------------------------------------------------------------------ |:------------:|
| guildID?     | ganze Zahl | Die ID der Gilde.                                                                          |    falsch    |
| userID?      | ganze Zahl | Die ID des Benutzers.                                                                      |    falsch    |
| return User? | boolean    | Gib den Benutzernamen <br /> 1 zurück. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies gibt deinen Discord Namen zurück, falls du keinen hast, dann wird er deinen Discord Benutzernamen zurückgeben:

```javascript
bot.command({
    Name: 'displayName',
    Code: `
  $displayName[$guildID;$authorID;true]
  `
});
```
