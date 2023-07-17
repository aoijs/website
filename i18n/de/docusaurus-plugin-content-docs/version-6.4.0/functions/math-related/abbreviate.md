---
title: '$abbreviate'
description: '$abbreviate erlaubt es Ihnen, große Zahlen abzukürzen.'
id: abbreviate
---

`$abbreviate` erlaubt Ihnen große Zahlen abzukürzen.

## Verwendung

```php
$abbreviate[num;dec?]
```

## Verwendung

| Feld  | Typ        | Beschreibung                           | Erforderlich |
| ----- | ---------- | -------------------------------------- |:------------:|
| num   | ganze Zahl | Nummer zum Abkürzen.                   |     wahr     |
| deco? | ganze Zahl | Dezimalstellen zwischen der Abkürzung. |    falsch    |

## Beispiel(e)

Diese Rückgabe: `20k`

```javascript
bot.command({
    name: 'abkürz',
    code: `
  $abbreviate[20000]
  `
});
```

Gibt zurück: `20.0k`

```javascript
bot.command({
    name: 'abkürz',
    code: `
  $abbreviate[20000;1]
  `
});
```
