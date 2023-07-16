---
title: $removeTextSplitElement
description: '$removeTextSplitElement wird ein spezifisches Text-Split-Element entfernen.'
id: removeTextSplitElement
---

`$removeTextSplitElement` wird ein spezifisches Text-Split-Element entfernen.

## Verwendung

```php
$removeTextSplitElement[element]
```

## Verwendung

| Feld    | Typ    | Beschreibung                      | Erforderlich |
| ------- | ------ | --------------------------------- |:------------:|
| element | string | Textteilung-Element zu entfernen. |     wahr     |

## Beispiel(e)

Dadurch wird das Wort "bye" aus dem Array entfernt:

```javascript
bot.command({
    name: "removeTextSplitElement",
    code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```