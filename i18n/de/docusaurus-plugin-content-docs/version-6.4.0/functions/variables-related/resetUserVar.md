---
title: '$resetUserVar'
description: '$resetUserVar wird eine bestimmte Benutzervariable auf den Standardwert einer Gilde setzen.'
id: resetUserVar
---

`$resetUserVar` setzt eine bestimmte Benutzervariable auf den Standardwert einer Gilde.

## Verwendung

```php
$resetUserVar[varname;guildID?;table?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| varname  | string     | Variablenname.    |     wahr     |
| guildID? | ganze Zahl | Gilden-ID.        |    falsch    |
| Tabelle? | string     | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies wird eine Variable mit dem Namen "Beispiel" zurücksetzen:

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```