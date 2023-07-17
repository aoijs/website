---
title: '$userPerms'
description: '$userPerms wird die Erlaubnis eines Benutzers einer bestimmten Gilde zurückgeben.'
id: userPerms
---

`$userPerms` wird die Erlaubnis eines Benutzers einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$userPerms[userID?;sep?;guildID?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                          | Erforderlich |
| -------- | ---------- | ----------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Die Benutzer-ID.                                      |    falsch    |
| sep?     | string     | Separator um mehrere zurückgegebene Werte zu trennen. |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID.                                        |    falsch    |

## Beispiel(e)

Dies wird deine Berechtigungen zurückgeben:

```javascript
bot.command({
    name: 'userPerms',
    code: `
  $userPerms[$authorID;, ;$guildID]
  `
});
```
