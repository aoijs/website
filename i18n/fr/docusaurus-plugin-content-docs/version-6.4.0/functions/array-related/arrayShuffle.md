---
title: '$arrayShuffle'
description: '$arrayShuffle mélangera les éléments du tableau donné.'
id: arrayShuffle
---

`$arrayShuffle` mélangera les éléments du tableau donné.

## Utilisation

```php
$arrayShuffle[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[tableau;, ]
  $arrayShuffle[tableau]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```