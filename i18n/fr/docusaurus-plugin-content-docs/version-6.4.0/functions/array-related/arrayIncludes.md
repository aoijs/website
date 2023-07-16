---
title: '$arrayIncludes'
description: '$arrayIncludes vérifiera si un élément spécifique existe dans le tableau.'
id: arrayIncludes
---

`$arrayIncludes` vérifiera si un élément spécifique existe dans le tableau.

## Utilisation

```php
$arrayIncludes[nom;requête]
```

## Paramètres

| Champ   | Type                 | Description                                                          | Obligatoire |
| ------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| nom     | chaîne de caractères | Nom du tableau.                                                      |    vrai     |
| requête | chaîne de caractères | L'élément que nous allons rechercher pour chaque élément du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[tableau;Leref]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
    // Ceci renverra "false" car le tableau ne contient pas le mot "Leref".
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[tableau;akarui]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
    // Ceci renverra "true" car le tableau contient le mot "akarui".
});
```