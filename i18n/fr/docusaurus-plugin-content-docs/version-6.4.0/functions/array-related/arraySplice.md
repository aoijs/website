---
title: '$arraySplice'
description: '$arraySplice permet de séparer les éléments d''un tableau.'
id: arraySplice
---

`$arraySplice` permet de séparer les éléments d'un tableau.

## Utilisation

```php
$arraySplice[nom;index;quantité;...éléments]
```

## Paramètres

| Champ       | Type                 | Description         | Obligatoire |
| ----------- | -------------------- | ------------------- |:-----------:|
| nom         | chaîne de caractères | Nom du tableau.     |    vrai     |
| index       | nombre               | Index de l'élément. |    vrai     |
| quantité    | nombre               | Quantité à séparer. |    vrai     |
| ...éléments | chaîne de caractères | Eléments à séparer. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-splice",
    code: `
  $arraySplice[tableau;2;3]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```