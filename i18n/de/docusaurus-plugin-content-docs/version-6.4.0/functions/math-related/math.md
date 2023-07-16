---
title: $math
description: '$math gibt ein berechnetes Ergebnis des angegebenen Arguments zurück.'
id: math
---

`$math` gibt ein berechnetes Ergebnis des angegebenen Arguments zurück.

## Verwendung

```php
$math[equation]
```

## Verwendung

| Feld      | Typ    |    Beschreibung     | Erforderlich |
| --------- | ------ |:-------------------:|:------------:|
| gleichung | string | Berechnung (/*-+()) |     wahr     |

## Beispiel(e)

Dies wird `205` als `15+5/2*26+(5+120)` zurückgeben:

```javascript
bot.command({
    name: 'math',
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
