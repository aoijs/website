---
title: '$setUserVar'
description: '$setUserVar ändert den Wert einer bestimmten Benutzervariable.'
id: setUserVar
---

`$setUserVar` ändert den Wert einer bestimmten Benutzervariable.

## Verwendung

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## Verwendung

| Feld     | Typ        | Beschreibung                                      | Erforderlich |
| -------- | ---------- | ------------------------------------------------- |:------------:|
| varname  | string     | Variablenname.                                    |     wahr     |
| wert     | string     | Neuer Variablenwert.                              |     wahr     |
| userID?  | ganze Zahl | Benutzer-ID.                                      |    falsch    |
| id?      | string     | 1. **bestimmte Gilden-ID** <br /> 2. **dm** |    falsch    |
| Tabelle? | string     | Variable Tabelle.                                 |    falsch    |

## Beispiel(e)

Dies wird den Wert von "Beispiel" in "Dies ist ein Wert" ändern:

```javascript
bot.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```