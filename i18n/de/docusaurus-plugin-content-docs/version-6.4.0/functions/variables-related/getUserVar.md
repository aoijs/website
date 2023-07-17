---
title: '$getUserVar'
description: '$getUserVar gibt den Wert einer bestimmten Benutzervariablen zurück.'
id: getUserVar
---

`$getUserVar` gibt den Wert einer angegebenen Benutzervariablen zurück.

## Verwendung

```php
$getUserVar[varname;userID?;id?;table?]
```

## Verwendung

| Feld     | Typ              | Beschreibung                                      | Erforderlich |
| -------- | ---------------- | ------------------------------------------------- |:------------:|
| varname  | string           | Variablenname.                                    |     wahr     |
| userID?  | ganze Zahl       | Benutzer-ID.                                      |    falsch    |
| id?      | string, Ganzzahl | 1. **bestimmte Gilden-ID** <br /> 2. **dm** |    falsch    |
| Tabelle? | string           | Variable Tabelle.                                 |    falsch    |

## Beispiel(e)

Dies gibt den Wert einer Variable mit dem Namen "Beispiel" zurück:

```javascript
bot.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```