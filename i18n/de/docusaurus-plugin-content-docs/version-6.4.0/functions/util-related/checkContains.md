---
title: $checkContains
description: '$checkContains wird prüfen, ob die angegebenen Argumente innerhalb eines Textes vorhanden sind.'
id: checkContains
---

`$checkContains` wird überprüfen, ob die angegebenen Argumente innerhalb des Textes vorhanden sind.

## Verwendung

```php
$checkContains[text;...chars]
```

## Verwendung

| Feld    | Typ    | Beschreibung                       | Erforderlich |
| ------- | ------ | ---------------------------------- |:------------:|
| text    | string | Text, den Sie überprüfen möchten.  |     wahr     |
| zeichen | string | Text nach dem gesucht werden soll. |     wahr     |

## Beispiel(e)

Dies gibt `true` als `easy` und/oder `simple` im angegebenen Text zurück:

```javascript
bot.command({
    name: 'checkContains',
    code: `
  $checkContains[aoi.js is easy and simple to use for beginners;easy;simple]
  `
});
```
