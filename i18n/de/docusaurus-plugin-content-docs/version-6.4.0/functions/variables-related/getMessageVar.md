---
title: '$getMessageVar'
description: '$getMessageVar gibt den Wert einer gegebenen Nachrichtenvariablen zurück.'
id: getMessageVar
---

`$getMessageVar` gibt den Wert einer gegebenen Nachrichtenvariablen zurück.

## Verwendung

```php
$getMessageVar[varname;guildID?;table?]
```

## Verwendung

| Feld           | Typ        | Beschreibung      | Erforderlich |
| -------------- | ---------- | ----------------- |:------------:|
| varname        | string     | Variablenname.    |     wahr     |
| nachrichtenID? | ganze Zahl | nachrichten-ID    |    falsch    |
| Tabelle?       | string     | Variable Tabelle. |    falsch    |

## Beispiel(e)

Dies gibt den Wert einer Variable mit dem Namen "Beispiel" zurück:

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```