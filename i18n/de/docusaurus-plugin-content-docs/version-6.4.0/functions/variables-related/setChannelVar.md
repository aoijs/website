---
title: '$setChannelVar'
description: '$setChannelVar ändert den Wert einer gegebenen Kanalvariable.'
id: setChannelVar
---

`$setChannelVar` ändert den Wert einer gegebenen Kanalvariable.

## Verwendung

```php
$setChannelVar[varname;value;channelID?;table?]
```

## Verwendung

| Feld       | Typ        | Beschreibung         | Erforderlich |
| ---------- | ---------- | -------------------- |:------------:|
| varname    | string     | Variablenname.       |     wahr     |
| wert       | string     | Neuer Variablenwert. |     wahr     |
| channelID? | ganze Zahl | Kanal-ID.            |    falsch    |
| Tabelle?   | string     | Variable Tabelle.    |    falsch    |

## Beispiel(e)

Dies wird den Wert von "Beispiel" in "Dies ist ein Wert" ändern:

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```