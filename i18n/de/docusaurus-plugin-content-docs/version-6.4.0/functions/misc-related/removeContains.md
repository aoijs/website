---
title: $removeContains
description: '$removeContains wird einen bestimmten Text aus einem gegebenen Text entfernen.'
id: removeContains
---

`$removeContains` wird einen bestimmten Text aus einem gegebenen Text entfernen.

## Verwendung

```php
$removeContains[content;...words]
```

## Verwendung

| Feld      | Typ    | Beschreibung                               | Erforderlich |
| --------- | ------ | ------------------------------------------ |:------------:|
| inhalt    | string | Text wo die Wörter entfernt werden sollen. |     wahr     |
| ...Wörter | string | Text zum Entfernen des Textes.             |     wahr     |

## Beispiel(e)

Dadurch wird das Wort "aoi.js aus dem angegebenen Text entfernt:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```