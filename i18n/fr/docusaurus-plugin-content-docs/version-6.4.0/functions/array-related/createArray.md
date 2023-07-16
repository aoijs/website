---
title: '$createArray'
description: '$createArray va créer un nouveau tableau avec des éléments donnés.'
id: createArray
---

`$createArray` va créer un nouveau tableau avec des éléments donnés.

## Utilisation

```php
$createArray[nom;...éléments]
```

## Paramètres

| Champ       | Type                 | Description         | Obligatoire |
| ----------- | -------------------- | ------------------- |:-----------:|
| nom         | chaîne de caractères | Nom du tableau.     |    vrai     |
| ...éléments | chaîne de caractères | Éléments à ajouter. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```