---
title: $sub
description: '$sub wird zwei gegebene Zahlen substratieren.'
id: sub
---

`$sub` wird zwei gegebene Zahlen substratieren.

## Verwendung

```php
$sub[num;num]
```

## Verwendung

| Feld | Typ    | Beschreibung                                               | Erforderlich |
| ---- | ------ | ---------------------------------------------------------- |:------------:|
| num  | anzahl | Zahlen, mit denen die Berechnung durchgeführt werden soll. |     wahr     |

## Beispiel(e)

Dies gibt `65` als `70-5` entspricht `65`:

```javascript
bot.command({
    name: 'sub',
    code: `
  $sub[70;5]
  `
});
```