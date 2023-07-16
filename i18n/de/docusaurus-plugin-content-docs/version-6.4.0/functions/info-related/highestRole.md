---
title: $highestRole
description: '$highestRole gibt die höchste Rolle eines bestimmten Benutzers zurück.'
id: highestRole
---

`$highestRole` gibt die höchste Rolle eines bestimmten Benutzers zurück.

## Verwendung

```php
$highestRole[userID?;guildID?;option?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                                         | Erforderlich |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |:------------:|
| userID?  | ganze Zahl | Die ID des Benutzers, von dem die höchste Rolle zurückgegeben werden soll.                                                           |    falsch    |
| guildID? | ganze Zahl | Die ID der Gilde.                                                                                                                    |    falsch    |
| option?  | string     | Die Option, wie die Rolle <br /> 1 zurückgegeben wird. **Name** <br /> 2. **id** (default) <br /> 3. **Erwähnung** |    falsch    |

## Beispiel(e)

Dies gibt den Namen Ihrer höchsten Rolle zurück:

```javascript
bot.command({
    name: 'highestRole',
    code: `
  $highestRole[$authorID;$guildID;name]
  `
});
```
