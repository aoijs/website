---
title: '$getVar'
description: '$getVar gibt den Wert einer globalen Variable zurück.'
id: getVar
---

`$getVar` wird den Wert einer globalen Variable zurückgeben

## Verwendung

```php
$getVar[varname;table?]
```

## Verwendung

| Feld     | Typ    | Beschreibung      | Erforderlich |
| -------- | ------ | ----------------- |:------------:|
| varname  | string | Variablenname.    |     wahr     |
| Tabelle? | string | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies gibt den Wert einer Variable mit dem Namen "Beispiel" zurück:

```javascript
bot.command({
    name: "getVar",
    code: `
    $getVar[Example;main]
    `
});
```