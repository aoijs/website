---
title: '$joinSplitText'
description: '$joinSplitText wird alle Textteile durch einen gegebenen Trennzeichen verbinden.'
id: joinSplitText
---

`$joinSplitText` wird alle Textteile durch einen angegebenen Trennzeichen verbinden.

## Verwendung

```php
$joinSplitText[sep?]
```

## Verwendung

| Feld | Typ        | Beschreibung                                          | Erforderlich |
| ---- | ---------- | ----------------------------------------------------- |:------------:|
| sep? | ganze Zahl | Separator um mehrere zurückgegebene Werte zu trennen. |    falsch    |

## Beispiel(e)

Dies wird alle Textteile mit einem Komma verbinden:

```javascript
bot.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```