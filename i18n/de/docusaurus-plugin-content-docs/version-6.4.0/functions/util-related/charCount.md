---
title: '$charCount'
description: '$charCount wird die angegebenen Zeichen in einem Text zählen und die Anzahl der Zeichen zurückgeben.'
id: charCount
---

`$charCount` wird die angegebenen Zeichen in einem Text zählen und die Anzahl der Zeichen zurückgeben.

## Verwendung

```php
$charCount[text]
```

## Verwendung

| Feld | Typ    | Beschreibung                                          | Erforderlich |
| ---- | ------ | ----------------------------------------------------- |:------------:|
| text | string | Der Text, von dem die Zeichenzahl zurückgegeben wird. |     wahr     |

## Beispiel(e)

Dies gibt `77` zurück, da es 77 Zeichen in diesem Text gibt:

```javascript
bot.command({
    name: 'charCount',
    code: `
  $charCount[aoi.js is one of the simplest and easiest ways to create your own Discord Bot]
  `
});
```
