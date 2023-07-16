---
title: '$userNickname'
description: '$userNickname gibt den Nicknamen eines Benutzers zurück.'
id: userNickname
---

`$userNickname` gibt den Nicknamen eines Benutzers zurück.

## Verwendung

```php
$userNickname[guildID?;userID?;returnUser?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                                                               | Erforderlich |
| ------------ | ---------- | ------------------------------------------------------------------------------------------ |:------------:|
| guildID?     | ganze Zahl | Die ID der Gilde.                                                                          |    falsch    |
| userID?      | ganze Zahl | Die ID des Benutzers.                                                                      |    falsch    |
| return User? | boolean    | Gib den Benutzernamen <br /> 1 zurück. **true** <br /> 2. **false** (Standard) |    falsch    |

## Beispiel(e)

Dies gibt deinen Nicknamen zurück, falls du keinen hast, dann wird er deinen Discord Benutzernamen zurückgeben:

```javascript
bot.command({
    name: 'Nickname',
    code: `
  $userNickname[$guildID;$authorID;true]
  `
});
```
