---
title: '$sum'
description: '$sum wird zwei angegebene Zahlen zusammenfassen.'
id: sum
---

`$sum` wird zwei Zahlen zusammenfassen.

## Verwendung

```php
$sum[num;num]
```

## Verwendung

| Feld | Typ    | Beschreibung                                               | Erforderlich |
| ---- | ------ | ---------------------------------------------------------- |:------------:|
| num  | anzahl | Zahlen, mit denen die Berechnung durchgeführt werden soll. |     wahr     |

## Beispiel(e)

Dies gibt `75` als `70+5` entspricht `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```