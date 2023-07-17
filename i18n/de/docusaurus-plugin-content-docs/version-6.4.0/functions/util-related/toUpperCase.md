---
title: '$toUpperCase'
description: '$toUpperCase wird den gegebenen Text von Kleinbuchstaben in Großbuchstaben ändern.'
id: toUpperCase
---

`$toUpperCase` wird den gegebenen Text von Kleinbuchstaben in Großbuchstaben ändern.

## Verwendung

```php
$toUpperCase[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                                          | Erforderlich |
| ---- | ------ | ----------------------------------------------------- |:------------:|
| text | string | Der Text, der in Großbuchstaben geändert werden soll. |     wahr     |

## Beispiel(e)

Dies wird alles in Großbuchstaben gegeben, in diesem Fall würde es `DIES IST AN EXAMPLE` zurückgeben:

```javascript
bot.command({
    name: "toUpperCase",
    code: `
    $toUpperCase[this is an example]
    `
});
```