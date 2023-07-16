---
title: $authorAvatar
description: '$authorAvatar gibt das Profilbild des Befehlsautors zurück.'
id: authorAvatar
---

`$authorAvatar` gibt das Profilbild des Befehlsautors zurück.

## Verwendung

```php
$authorAvatar[size?;dynamic?;format?]
```

## Verwendung

| Feld         | Typ            | Beschreibung                                      | Erforderlich |
| ------------ | -------------- | ------------------------------------------------- |:------------:|
| size?        | string, Nummer | Die Größe des Bildes                              |    falsch    |
| dynamisch?   | boolean        | 1. **true** (Standard) <br /> 2. **Falsch** |    falsch    |
| formatieren? | string         | Das Format des zurückgegebenen Bildes.            |    falsch    |

## Beispiel(e)

Damit wird dein Profilbild zurückgegeben:

```javascript
bot.command({
    name: 'authorAvatar',
    code: `
  $authorAvatar[2048;true;webp]
  `
});
```
