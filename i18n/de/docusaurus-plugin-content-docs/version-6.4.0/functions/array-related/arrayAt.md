---
title: '$arrayAt'
description: '$arrayAt wird den Index (Position) des Array-Elements auswählen, das zurückgegeben werden soll. Gibt nichts zurück, wenn der angegebene Index nicht gefunden werden kann.'
id: arrayAt
---

$arrayAt wird den Index (Position) des Array-Elements auswählen, das zurückgegeben werden soll. Gibt nichts zurück, wenn der angegebene Index nicht gefunden werden kann.

## Verwendung

```php
$arrayAt[name;index]
```

## Parameter

| Feld  | Typ    | Beschreibung               | Erforderlich |
| ----- | ------ | -------------------------- |:------------:|
| name  | string | Name des Arrays.           |     wahr     |
| index | string | Die Position des Elements. |     wahr     |

## Beispiel(e)

- Dies wird `Aoi.dashboard` zurückgeben:

```javascript
bot.command({
    name: "array-at",
    code: `
  $arrayAt[Aoi;3]

  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]
  `
    // Gibt "Aoi.dashboard"
});
```
