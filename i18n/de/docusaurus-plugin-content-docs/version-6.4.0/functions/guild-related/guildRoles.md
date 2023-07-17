---
title: $guildRoles
description: '$guildRoles gibt alle Rollen einer bestimmten Gilde zurück.'
id: guildRoles
---

`$guildRoles` wird alle Rollen einer bestimmten Gilde zurückgeben.

## Verwendung

```php
$guildRoles[guildID?;option?;sep?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                                                                                                       | Erforderlich |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | ganze Zahl | Die ID der Gilde.                                                                                                                  |    falsch    |
| option?  | string     | Die Option, wie man die Rollen <br /> 1 zurückgibt. **Name** (Standard) <br /> 2. **id** <br /> 3. **Erwähnung** |    falsch    |
| sep?     | string     | Separator um mehrere zurückgegebene Werte zu trennen.                                                                              |    falsch    |

## Beispiel(e)

Dies gibt alle Rollen deiner Gilde zurück:

```javascript
bot.command({
    name: 'guildRoles',
    code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
