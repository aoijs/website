---
title: $toLowerCase
description: '$toLowerCase wird den gegebenen Text von Großbuchstaben zu Kleinbuchstaben ändern.'
id: toLowerCase
---

`$toLowerCase` wird den gegebenen Text von Großbuchstaben zu Kleinbuchstaben ändern.

## Verwendung

```php
$toLowerCase[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                             | Erforderlich |
| ---- | ------ | ---------------------------------------- |:------------:|
| text | string | Der zu ändernde Text in Kleinbuchstaben. |     wahr     |

## Beispiel(e)

Dies wird alles in Kleinbuchstaben gegeben, in diesem Fall würde es `aoi.js zurückgeben.`:

```javascript
bot.command({
    Name: "toLowerCase",
    Code: `
    $toLowerCase[AOI.JS IS GREAT.]
    `
});
```