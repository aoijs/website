---
title: '$arrayEvery'
description: '$arrayEvery testera si tous les éléments du tableau passent la condition.'
id: arrayEvery
---

`$arrayEvery` testera si tous les éléments du tableau passent la condition.

## Utilisation

```php
$arrayEvery[nom;requête;typeDeRequête?]
```

## Paramètres

| Champ          | Type                 | Description                                                          | Obligatoire |
| -------------- | -------------------- | -------------------------------------------------------------------- |:-----------:|
| nom            | chaîne de caractères | Nom du tableau.                                                      |    vrai     |
| requête        | chaîne de caractères | L'élément que nous allons rechercher pour chaque élément du tableau. |    vrai     |
| typeDeRequête? | chaîne de caractères | L'opérateur de comparaison.                                          |    faux     |

## Opérateurs de comparaison

* `includes` — Incluant
* `startsWith` — Commence par
* `endsWith` — Se termine par
* `==` — Égal à
* `!=` — Pas égal à
* `>` — Supérieur à
* `<` — Inférieur à
* `>=` – Supérieur ou égal à
* `<=` — inférieur ou égal à

## Exemple(s)

```javascript
bot.command({
    name: "array-every",
    code: `
  $arrayEvery[tableau;30;==]
  $createArray[tableau;1;2;3;0;30]
  `
    // Ceci retournera "false" car 1 ≠ 30. Vous pouvez considérer que c'est comme l'opérateur logique "et (&&)".
});
```
