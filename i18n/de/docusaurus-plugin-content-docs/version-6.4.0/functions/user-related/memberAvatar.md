---
title: $memberAvatar
description: '$memberAvatar wird das Profilbild eines Gildenmitglieds zurückgeben.'
id: memberAvatar
---

`$memberAvatar` gibt das Profilbild eines Gildenmitglieds zurück.

## Verwendung

```php
$memberAvatar[guildID?;userID?;size?;dynamic?;format?]
```

## Verwendung

| Feld         | Typ        | Beschreibung                                      | Erforderlich |
| ------------ | ---------- | ------------------------------------------------- |:------------:|
| guildID?     | ganze Zahl | Die ID der Gilde.                                 |    falsch    |
| userID?      | ganze Zahl | Die ID des Benutzers.                             |    falsch    |
| size?        | ganze Zahl | Die Größe des Bildes.                             |    falsch    |
| dynamisch?   | boolean    | 1. **true** (Standard) <br /> 2. **Falsch** |    falsch    |
| formatieren? | string     | Bildformat.                                       |    falsch    |

## Beispiel(e)

Damit wird dein Profilbild zurückgegeben:

```javascript
bot.command({
    name: 'memberAvatar',
    code: `
  $memberAvatar[$guildID;$authorID;2048;true;webp]
  `
});
```
