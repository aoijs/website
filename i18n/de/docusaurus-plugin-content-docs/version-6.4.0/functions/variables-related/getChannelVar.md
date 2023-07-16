---
title: '$getChannelVar'
description: '$getChannelVar gibt den Wert einer gegebenen Kanalvariablen zurück.'
id: getChannelVar
---

`$getChannelVar` gibt den Wert einer gegebenen Kanalvariablen zurück.

## Verwendung

```php
$getChannelVar[varname;channelID?;table?]
```

## Verwendung

| Feld       | Typ        | Beschreibung      | Erforderlich |
| ---------- | ---------- | ----------------- |:------------:|
| varname    | string     | Variablenname.    |     wahr     |
| channelID? | ganze Zahl | Kanal-ID.         |    falsch    |
| Tabelle?   | string     | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies gibt den Wert einer Variable mit dem Namen "Beispiel" zurück:

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```