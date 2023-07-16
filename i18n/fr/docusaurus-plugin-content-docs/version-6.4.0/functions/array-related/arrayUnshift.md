---
title: '$arrayUnshift'
description: '$arrayUnshift retournera le nombre d''éléments du tableau donné.'
id: arrayUnshift
---

`$arrayUnshift` retournera le nombre d'éléments du tableau donné.

## Utilisation

```php
$arrayUnshift[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[tableau]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```