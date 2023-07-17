---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar ändert den Wert einer gegebenen globalen Benutzervariable.'
id: setGlobalUserVar
---

`$setGlobalUserVar` ändert den Wert einer gegebenen globalen Benutzervariable.

## Verwendung

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Verwendung

| Feld     | Typ        | Beschreibung         | Erforderlich |
| -------- | ---------- | -------------------- |:------------:|
| varname  | string     | Variablenname.       |     wahr     |
| wert     | string     | Neuer Variablenwert. |     wahr     |
| userID?  | ganze Zahl | Benutzer-ID.         |    falsch    |
| Tabelle? | string     | Variable Tabelle.    |    falsch    |

## Beispiel(e)

Dies ändert den Wert von "Beispiel" in "Dies ist ein Wert" für den Befehlsautor:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```