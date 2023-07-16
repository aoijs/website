---
title: '$resetGuildVar'
description: '$resetGuildVar wird eine bestimmte Gildenvariable auf ihren Standardwert setzen.'
id: resetGuildVar
---

`$resetGuildVar` wird eine bestimmte Gildenvariable auf ihren Standardwert setzen.

## Verwendung

```php
$resetGuildVar[varname;table?]
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
    name: "resetGuildVar",
    code: `
    $resetGuildVar[Example;main]
    `
});
```