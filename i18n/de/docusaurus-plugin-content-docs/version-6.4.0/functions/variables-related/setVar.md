---
title: '$setVar'
description: '$setVar ändert den Wert einer gegebenen globalen Variable.'
id: setVar
---

`$setVar` wird den Wert einer gegebenen globalen Variable ändern.

## Verwendung

```php
$setVar[varname;value;table?]
```

## Verwendung

| Feld     | Typ    | Beschreibung         | Erforderlich |
| -------- | ------ | -------------------- |:------------:|
| Varname  | string | Variablenname.       |     wahr     |
| Wert     | string | Neuer Variablenwert. |     wahr     |
| Tabelle? | string | Variable Tabelle.    |    falsch    |

## Beispiel(e)

Dies wird den Wert von "Beispiel" in "Dies ist ein Wert" ändern:

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```