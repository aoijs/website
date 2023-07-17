---
title: '$arraySort'
description: '$arraySort va trier un tableau donné.'
id: arraySort
---

`$arraySort` va trier un tableau donné.

## Utilisation

```php
$arraySort[nom;type?]
```

## Paramètres

| Champ | Type                 | Description                                                              | Obligatoire |
| ----- | -------------------- | ------------------------------------------------------------------------ |:-----------:|
| nom   | chaîne de caractères | Nom du tableau.                                                          |    vrai     |
| type  | chaîne de caractères | Type de tri <br /> 1. **asc** (croissant) 2. **dsc** (décroissant) |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[tableau;, ]
  $arraySort[tableau;asc]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```