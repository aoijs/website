---
title: $isNumber
description: '$isNumber wird prüfen, ob das angegebene Argument eine Zahl ist.'
id: isNumber
---

`$isNumber` wird überprüfen, ob das angegebene Argument eine Zahl ist.

## Verwendung

```php
$isNumber[num]
```

## Verwendung

| Feld | Typ    | Beschreibung                                              | Erforderlich |
| ---- | ------ | --------------------------------------------------------- |:------------:|
| num  | anzahl | Argument, das überprüft werden soll, ob es eine Zahl ist. |     wahr     |

## Beispiel(e)

Dies liefert `true` als `255` ist eine gültige Nummer:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
