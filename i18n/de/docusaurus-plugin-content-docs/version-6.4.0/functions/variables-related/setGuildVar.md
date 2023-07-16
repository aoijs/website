---
title: '$setGuildVar'
description: '$setGuildVar ändert den Wert einer bestimmten Gildenvariable.'
id: setGuildVar
---

`$setGuildVar` ändert den Wert einer gegebenen Gildenvariable.

## Verwendung

```php
$setGuildVar[varname;value;guildID?;table?]
```

## Verwendung

| Feld     | Typ        | Beschreibung         | Erforderlich |
| -------- | ---------- | -------------------- |:------------:|
| varname  | string     | Variablenname.       |     wahr     |
| wert     | string     | Neuer Variablenwert. |     wahr     |
| guildID? | ganze Zahl | Gilden-ID.           |    falsch    |
| Tabelle? | string     | Variable Tabelle.    |    falsch    |

## Beispiel(e)

Dies wird den Wert von "Beispiel" in "Dies ist ein Wert" ändern:

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```