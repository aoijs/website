---
title: $userCustomStatus
description: '$userCustomStatus gibt den benutzerdefinierten Status eines Benutzers zurück.'
id: userCustomStatus
---

`$userCustomStatus` gibt den benutzerdefinierten Status eines Benutzers zurück.

## Verwendung

```php
$userCustomStatus[guildID?;userID?;option?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                                                                    | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die Rollen-ID.                                                                                                                                                  |    falsch    |
| userID?  | ganze Zahl | Die Benutzer-ID.                                                                                                                                                |    falsch    |
| option?  | string     | Welcher Teil des Status wird zurückgegeben <br /> 1. **Status** (Standard) - gibt den Statustext <br /> 2 zurück. **Emoji** - gibt den Emoji zurück |    falsch    |

## Beispiel(e)

Dies gibt deinen Status-Text zurück, wenn du einen hast:

```javascript
bot.command({
    name: 'userCustomStatus',
    code: `
  $userCustomStatus[$authorID;$guildID;state]
  `
});
```
