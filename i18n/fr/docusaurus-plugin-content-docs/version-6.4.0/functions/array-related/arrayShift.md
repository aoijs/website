---
title: '$arrayShift'
description: '$arrayShift retournera le premier élément du tableau donné.'
id: arrayShift
---

`$arrayShift` retournera le premier élément du tableau donné.

## Utilisation

```php
$arrayShift[nom]
```

## Paramètres

| Champ | Type                 | Description     | Obligatoire |
| ----- | -------------------- | --------------- |:-----------:|
| nom   | chaîne de caractères | Nom du tableau. |    vrai     |

## Exemple(s)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[tableau]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```