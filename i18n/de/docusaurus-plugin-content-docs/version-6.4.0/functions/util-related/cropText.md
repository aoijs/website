---
title: '$cropText'
description: '$cropText wird den gegebenen Text zuschneiden.'
id: cropText
---

`$cropText` wird verwendet, um den gegebenen Text zu schneiden.

## Verwendung

```php
$cropText[text;limit;start?]
```

## Verwendung

| Feld      | Typ    | Beschreibung                                                                                        | Erforderlich |
| --------- | ------ | --------------------------------------------------------------------------------------------------- |:------------:|
| text      | string | Text, den Sie schneiden möchten.                                                                    |     wahr     |
| begrenzen | anzahl | Die Begrenzung des zugeschnittenen Textes/wird anfangen, jeden Text zu schneiden, der danach kommt. |     wahr     |
| beginnen? | anzahl | Wo die Zubereitung beginnen soll.                                                                   |    falsch    |

## Beispiel(e)

Dies wird `bye` zurückgeben und `Hallo und` aus dem angegebenen Text entfernen:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```
