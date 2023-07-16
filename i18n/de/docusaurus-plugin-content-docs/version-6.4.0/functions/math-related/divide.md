---
title: $divide
description: '$divide teilt zwei angegebene Zahlen.'
id: divide
---

`$divide` teilt zwei Zahlen.

## Verwendung

```php
$divide[...numbers;...numbers]
```

## Verwendung

| Feld    | Typ    | Beschreibung                                  | Erforderlich |
| ------- | ------ | --------------------------------------------- |:------------:|
| nummern | anzahl | Nummern, die Sie mit einander teilen möchten. |     wahr     |

## Beispiel(e)

Dies gibt `23` als `69/3` gleich zurück.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```
