---
title: '$arrayPop'
description: '$arrayPop retournera le dernier élément du tableau donné.'
id: arrayPop
---

`$arrayPop` retournera le dernier élément du tableau donné.

## Utilisation

```php
$arrayPop[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[tableau]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```