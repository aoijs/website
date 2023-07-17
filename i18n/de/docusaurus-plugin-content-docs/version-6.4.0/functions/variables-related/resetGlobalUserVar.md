---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar wird eine angegebene globale Benutzervariable auf ihren Standardwert setzen.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` wird eine globale Benutzervariable auf ihren Standardwert setzen.

## Verwendung

```php
$resetGlobalUserVar[varname;table?]
```

## Verwendung

| Feld     | Typ    | Beschreibung      | Erforderlich |
| -------- | ------ | ----------------- |:------------:|
| varname  | string | Variablenname.    |     wahr     |
| Tabelle? | string | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies wird eine Variable mit dem Namen "Beispiel" zurücksetzen:

```javascript
bot.command({
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```