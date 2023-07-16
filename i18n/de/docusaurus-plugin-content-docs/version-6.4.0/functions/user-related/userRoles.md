---
title: $userRoles
description: '$userRoles gibt die Rollen eines bestimmten Benutzers zurück.'
id: userRoles
---

`$userRoles` gibt die Rollen eines bestimmten Benutzers zurück.

## Verwendung

```php
$userRoles[userID?;guildID?;option?;sep?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                           | Erforderlich |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |:------------:|
| userID?  | ganze Zahl | Die Benutzer-ID.                                                                                                       |    falsch    |
| guildID? | ganze Zahl | Die Gilden-ID.                                                                                                         |    falsch    |
| option?  | string     | Wie man die Rollen <br /> 1 zurückgibt. **Name** (Standard) <br /> 2. **id** <br /> 3. **Erwähnung** |    falsch    |
| sep?     | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                                                  |    falsch    |

## Beispiel(e)

Dies wird Ihre Rollen zurückgeben:

```javascript
bot.command({
    name: 'userRoles',
    code: `
  $userRoles[$authorID;$guildID;id;, ]
  `
});
```
