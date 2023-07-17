---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar gibt den Wert einer gegebenen globalen Benutzervariablen zurück.'
id: getGlobalUserVar
---

`$getGlobalUserVar` gibt den Wert einer gegebenen globalen Benutzervariablen zurück.

## Verwendung

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| varname  | string     | Variablenname.    |     wahr     |
| userID?  | ganze Zahl | Benutzer-ID.      |    falsch    |
| Tabelle? | string     | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies gibt den Wert einer Variable mit dem Namen "Beispiel" zurück:

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```