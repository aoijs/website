---
title: '$arrayLength'
description: '$arrayLength retournera la longueur d''un tableau donné.'
id: arrayLength
---

`$arrayLength` retournera la longueur d'un tableau donné.

## Utilisation

```php
$arrayLength[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-length",
    code: `
  $arrayLength[tableau]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```