---
title: '$arrayIndexOf'
description: '$arrayIndexOf retournera l''index du premier élément trouvé de la requête.'
id: arrayIndexOf
---

`$arrayIndexOf` retournera l'index du premier élément trouvé de la requête.

## Utilisation

```php
$arrayIndexOf[nom;requête]
```

## Paramètres

| Champ   | Type                 | Description                                                          | Obligatoire |
| ------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| nom     | chaîne de caractères | Nom du tableau.                                                      |    vrai     |
| requête | chaîne de caractères | L'élément que nous allons rechercher pour chaque élément du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "arrayIndexOf",
    code: `
  $arrayIndexOf[tableau;akarui]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
    // Ceci renverra "2" car le mot "akarui" se trouve en deuxième position dans le tableau.
});
```