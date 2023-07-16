---
title: '$userAvatar'
description: '$userAvatar gibt das Profilbild eines bestimmten Benutzers zurück.'
id: userAvatar
---

`$userAvatar` gibt das Profilbild eines bestimmten Benutzers zurück.

## Verwendung

```php
$userAvatar[userID?;size?;dynamic?;format?]
```

## Verwendung

| Feld         | Typ            | Beschreibung                                      | Erforderlich |
| ------------ | -------------- | ------------------------------------------------- |:------------:|
| userID?      | ganze Zahl     | Die ID des Benutzers.                             |    falsch    |
| size?        | string, Nummer | Die Größe des Bildes                              |    falsch    |
| dynamisch?   | boolean        | 1. **true** (Standard) <br /> 2. **Falsch** |    falsch    |
| formatieren? | string         | Das Format des zurückgegebenen Bildes.            |    falsch    |

## Beispiel(e)

Damit wird dein Profilbild zurückgegeben:

```javascript
bot.command({
    name: 'userAvatar',
    code: `
  $userAvatar[$authorID;2048;true;webp]
  `
});
```
