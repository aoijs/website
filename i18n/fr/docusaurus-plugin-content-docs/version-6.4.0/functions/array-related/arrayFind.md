---
title: '$arrayFind'
description: '$arrayFind vérifiera le premier élément du tableau qui correspond à la requête et le retournera.'
id: arrayFind
---

`$arrayFind` vérifiera le premier élément du tableau qui correspond à la requête et le retournera.

## Utilisation

```php
$arrayFind[nom;requête;typeDeRequête?;séparateur?]
```

## Paramètres

| Champ          | Type                 | Description                                                          | Obligatoire |
| -------------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| nom            | chaîne de caractères | Nom du tableau.                                                      |    vrai     |
| requête        | chaîne de caractères | L'élément que nous allons rechercher pour chaque élément du tableau. |    vrai     |
| typeDeRequête? | chaîne de caractères | L'opérateur de comparaison.                                          |    faux     |
| séparateur?    | chaîne de caractères | Séparateur.                                                          |    faux     |

## Opérateurs de comparaison

* `==` — Chaque élément correspondant à la requête.
* `!=` — Chaque élément qui ne correspond pas à la requête.
* `>` - Tous les éléments situés à "gauche" de l'élément trouvé, à l'exclusion de lui-même.
* `<` - Tous les éléments situés à "droite" de l'élément trouvé, à l'exclusion de lui-même.
* `>=` - Tous les éléments situés à "gauche" de l'élément trouvé, y compris lui-même.
* `<=` - Tous les éléments situés à "droite" de l'élément trouvé, y compris lui-même.

## Exemple(s)

```javascript
bot.command({
    name: "array-find",
    code: `
  $arrayFind[tableau;akarui;==;, ]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
    // Ceci renverra "akarui" car il correspond à la requête.
});
```