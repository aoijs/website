---
title: '$ordinal'
description: '$ordinal ajoute st, nd, th à un nombre tel que : 1st, 2nd, 3rd, 4th.'
id: ordinal
---

`$ordinal` ajoute `st`, `nd`, `rd`, `th` à un nombre tel que : `1er`, `2nd`, `3rd`, `4th`.

## Utilisation

```php
$ordinal[nombre]
```

## Paramètres

| Champ  | Type   | Description                                                  | Obligatoire |
| ------ | ------ | ------------------------------------------------------------ |:-----------:|
| nombre | nombre | Nombre dont on va ajouter `st`, `nd`, `rd`, `th` à celui-ci. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: 'ordinal',
    code: `
  $ordinal[12] -> Renvoie 12nd 
  $ordinal[50] -> Renvoie 50th
  $ordinal[11] -> Renvoie 11st
  $ordinal[88] -> Renvoie 88th
  `
});
```
