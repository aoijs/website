---
title: '$arrayReverse'
description: '$arrayReverse inverse les éléments dans le tableau donné.'
id: arrayReverse
---

`$arrayReverse` inverse les éléments dans le tableau donné.

## Utilisation

```php
$arrayReverse[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[tableau]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```