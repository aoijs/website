---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf retournera l''index du dernier élément trouvé de la requête.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` retournera l'index du dernier élément trouvé de la requête.

## Utilisation

```php
$arrayLastIndexOf[nom;requête]
```

## Paramètres

| Champ   | Type                 | Description                                                          | Obligatoire |
| ------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| nom     | chaîne de caractères | Nom du tableau.                                                      |    vrai     |
| requête | chaîne de caractères | L'élément que nous allons rechercher pour chaque élément du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-lastindexof",
    code: `
  $arrayIndexOf[tableau;akarui]
  $createArray[tableau;aoi.js;akarui;akarui;documents;bot]
  `
    // Ceci renverra "3" car le dernier mot "akarui" se trouve en troisième position dans le tableau.
});
```