---
title: $ordinal
description: '$ordinal fügt st, nd, rd, th zu einer Zahl wie 1st, 2nd, 3rd, 4th hinzu.'
id: ordinal
---

`$ordinal` fügt `st`, `nd`, `rd`, `th` zu einer Zahl wie `1.`, `2.`, `3.`, `4.`.

## Verwendung

```php
$ordinal[number]
```

## Verwendung

| Feld   | Typ    | Beschreibung                                  | Erforderlich |
| ------ | ------ | --------------------------------------------- |:------------:|
| anzahl | anzahl | Nummer, die `st`, `nd`, `rd`, `th` hinzufügt. |     wahr     |

## Beispiel(e)

```javascript
bot.command({
    Name: 'ordinal',
    Code: `
  $ordinal[12] -> Gibt 12nd 
  $ordinal[50] -> Gibt den 50sten
  $ordinal[11] -> kehrt 11st
  $ordinal[88] zurück -> Gibt 88th
  `
});
```
