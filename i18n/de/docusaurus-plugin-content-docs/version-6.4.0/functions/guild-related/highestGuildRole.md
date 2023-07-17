---
title: $highestGuildRole
description: '$guildHighestRole wird die höchste Gildenrolle einer bestimmten Gilde zurückgeben.'
id: highestGuildRole
---

`$guildHighestRole` wird die höchste Gildenrolle einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$guildHighestRole[guildID?;option?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                                      | Erforderlich |
| -------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde.                                                                                                                 |    falsch    |
| option?  | string     | Die Option, wie man die Rolle <br /> 1 zurückgibt. **Name** (Standard) <br /> 2. **id** <br /> 3. **Erwähnung** |    falsch    |

## Beispiel(e)

Dies gibt den Namen der höchsten Rolle deiner Gilde zurück:

```javascript
bot.command({
    name: 'guildHighestRole',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
