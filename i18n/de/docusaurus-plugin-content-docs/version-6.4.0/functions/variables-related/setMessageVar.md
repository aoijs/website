---
title: '$setMessageVar'
description: '$setMessageVar ändert den Wert einer gegebenen Nachrichtenvariable.'
id: setMessageVar
---

`$setMessageVar` ändert den Wert einer gegebenen Nachrichtenvariable.

## Verwendung

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Verwendung

| Feld           | Typ        | Beschreibung         | Erforderlich |
| -------------- | ---------- | -------------------- |:------------:|
| varname        | string     | Variablenname.       |     wahr     |
| wert           | string     | Neuer Variablenwert. |     wahr     |
| nachrichtenID? | ganze Zahl | Nachrichten-ID.      |    falsch    |
| Tabelle?       | string     | Variable Tabelle.    |    falsch    |

## Beispiel(e)

Dies wird den Wert von "Beispiel" in "Dies ist ein Wert" ändern:

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```