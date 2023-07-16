---
title: '$arraySome'
description: '$arraySome vérifie la présence d''éléments donnés dans le tableau.'
id: arraySome
---

`$arraySome` vérifie la présence d'éléments donnés dans le tableau.

## Utilisation

```php
$arraySome[nom;requête;typeDeRequête?]
```

## Paramètres

| Champ          | Type                 | Description                                                          | Obligatoire |
| -------------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| nom            | chaîne de caractères | Nom du tableau.                                                      |    vrai     |
| requête        | chaîne de caractères | L'élément que nous allons rechercher pour chaque élément du tableau. |    vrai     |
| typeDeRequête? | chaîne de caractères | L'opérateur de comparaison.                                          |    faux     |

* `==` — Chaque élément correspondant à la requête.
* `!=` — Chaque élément qui ne correspond pas à la requête.
* `>` - Tous les éléments situés à "gauche" de l'élément trouvé, à l'exclusion de lui-même.
* `<` - Tous les éléments situés à "droite" de l'élément trouvé, à l'exclusion de lui-même.
* `>=` - Tous les éléments situés à "gauche" de l'élément trouvé, y compris lui-même.
* `<=` - Tous les éléments situés à "droite" de l'élément trouvé, y compris lui-même.

## Exemple(s)

```javascript
bot.command({
    name: "array-some",
    code: `
  $arraySome[tableau;aoi.js;==]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```