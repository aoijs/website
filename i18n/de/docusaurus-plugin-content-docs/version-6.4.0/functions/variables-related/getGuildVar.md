---
title: '$getGuildVar'
description: '$getGuildVar gibt den Wert einer gegebenen Gildenvariablen zurück.'
id: getGuildVar
---

`$getGuildVar` gibt den Wert einer gegebenen Gildenvariablen zurück.

## Verwendung

```php
$getGuildVar[varname;guildID?;table?]
```

## Verwendung

| Feld     | Typ        | Beschreibung      | Erforderlich |
| -------- | ---------- | ----------------- |:------------:|
| varname  | string     | Variablenname.    |     wahr     |
| guildID? | ganze Zahl | Gilden-ID.        |    falsch    |
| Tabelle? | string     | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies gibt den Wert einer Variable mit dem Namen "Beispiel" zurück:

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```