---
title: '$arrayPush'
description: '$arrayPush ajoutera des éléments au tableau.'
id: arrayPush
---

`$arrayPush` ajoutera des éléments au tableau.

## Utilisation

```php
$arrayPush[...éléments]
```

## Paramètres

| Champ       | Type                 | Description         | Obligatoire |
| ----------- | -------------------- | ------------------- |:-----------:|
| ...éléments | chaîne de caractères | Éléments à ajouter. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[tableau;Leref;Ayaka;Ferel]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```