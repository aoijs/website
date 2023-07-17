---
title: '$userBanner'
description: '$userBanner gibt den Profil-Banner eines bestimmten Benutzers zurück.'
id: userBanner
---

`$userBanner` wird den Profil-Banner eines bestimmten Benutzers zurückgeben.

## Verwendung

```php
$userBanner[userID?;size?;dynamic?;format?]
```

## Verwendung

| Feld         | Typ            | Beschreibung                                      | Erforderlich |
| ------------ | -------------- | ------------------------------------------------- |:------------:|
| userID?      | ganze Zahl     | Die ID des Benutzers.                             |    falsch    |
| size?        | string, Nummer | Die Größe des Bildes.                             |    falsch    |
| dynamisch?   | boolean        | 1. **true** (Standard) <br /> 2. **Falsch** |    falsch    |
| formatieren? | string         | Das Format des zurückgegebenen Bildes.            |    falsch    |

## Beispiel(e)

Ihr Profil-Banner wird zurückgegeben:

```javascript
bot.command({
    name: 'userBanner',
    code: `
  $userBanner[$authorID;4096;true;webp]
  `
});
```
