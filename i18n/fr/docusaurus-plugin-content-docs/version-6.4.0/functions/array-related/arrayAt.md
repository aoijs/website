---
title: '$arrayAt'
description: '$arrayAt choisira l''index (position) de l''élément du tableau à retourner. Ne retourne rien si l''index donné est introuvable.'
id: arrayAt
---

`$arrayAt` choisira l'index (position) de l'élément du tableau à retourner. Ne retourne rien si l'index donné est introuvable.

## Utilisation

```php
$arrayAt[nom;index]
```

## Paramètres

| Champ | Type                 | Description               | Obligatoire |
| ----- | -------------------- | ------------------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau.           |    vrai     |
| index | chaîne de caractères | La position de l'élément. |    vrai     |

## Exemple(s)

- Ceci retournera `Aoi.dashboard` :

```javascript
bot.command({
    name: "array-at",
    code: `
  $arrayAt[Aoi;3]

  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]
  `
    // Retourne "Aoi.dashboard"
});
```
