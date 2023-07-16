---
title: $usersWithRole
description: '$usersWithRole wird die Benutzer zurückgeben, die eine bestimmte Rolle haben.'
id: usersWithRole
---

`$usersWithRole` wird die Benutzer zurückgeben, die eine bestimmte Rolle haben.

## Verwendung

```php
$usersWithRole[roleID;guildID?;option?;sep?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                   | Erforderlich |
| -------- | ---------- | ---------------------------------------------------------------------------------------------- |:------------:|
| roleID   | ganze Zahl | Die Rollen-ID.                                                                                 |     wahr     |
| guildID? | ganze Zahl | Die Gilden-ID.                                                                                 |    falsch    |
| option?  | string     | Wie man die Benutzer <br /> 1 zurückgibt. **id** (default) <br /> 2. **Erwähnung** |    falsch    |
| sep?     | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                          |    falsch    |

## Beispiel(e)

Dadurch werden die Benutzer einer bestimmten Rolle zurückgegeben, stellen Sie sicher, dass die RollenID ersetzt wird:

```javascript
bot.command({
    name: 'usersWithRole',
    code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `
});
```
