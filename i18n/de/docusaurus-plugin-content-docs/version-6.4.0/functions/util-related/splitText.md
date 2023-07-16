---
title: '$splitText'
description: '$splitText gibt je nach Index einen Wert von $textSplit zurück.'
id: splitText
---

`$splitText` gibt je nach Index einen Wert von $textSplit zurück.

## Verwendung

```php
$splitText[index]
```

## Verwendung

| Feld  | Typ        | Beschreibung                   | Erforderlich |
| ----- | ---------- | ------------------------------ |:------------:|
| index | ganze Zahl | Index von `$textSplit` Inhalt. |     wahr     |

## Beispiel(e)

Dies gibt `aoi.js` zurück, da es das zweite Argument von `$textSplit` ist:

```javascript
bot.command({
    name: 'splitText',
    code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `
});
```