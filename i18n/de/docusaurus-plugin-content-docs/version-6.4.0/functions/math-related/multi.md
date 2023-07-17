---
title: '$multi'
description: '$multi Operation / Multiplikation.'
id: multi
---

`$multi` multipliziert die angegebenen Zahlen.

## Verwendung

```php
$multi[num;num]
```

## Verwendung

| Feld | Typ    | Beschreibung                             | Erforderlich |
| ---- | ------ | ---------------------------------------- |:------------:|
| num  | anzahl | Nummern, die Sie multiplizieren möchten. |     wahr     |

## Beispiel(e)

Dies gibt `72` als `8*9` zurück, dass:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```
