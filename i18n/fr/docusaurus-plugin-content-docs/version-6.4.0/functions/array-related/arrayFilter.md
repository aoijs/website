---
title: '$arrayFilter'
description: '$arrayFilter vérifiera si un élément dans le tableau est égal à la requête et le retourne.'
id: arrayFilter
---

`$arrayFilter` vérifiera si un élément dans le tableau est égal à la requête et le retourne.

## Utilisation

```php
$arrayFilter[nom;requête;typeDeRequête?;séparateur?]
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
    name: "array-filter",
    code: `
  $arrayFilter[tableau;akarui;==;, ]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
    // Ceci renverra "akarui" car il correspond à la requête.
});
```

```javascript
bot.command({
    name: "array-filter",
    code: `
  $arrayFilter[tableau;akarui;<=;, ]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
    // Ceci renverra "documents, bot" car ces mots se trouvent à droite de l'élément trouvé.
});
```