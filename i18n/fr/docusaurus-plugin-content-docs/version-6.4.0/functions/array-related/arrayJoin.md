---
title: '$arrayJoin'
description: '$arrayJoin rejoindra le tableau avec un séparateur donné.'
id: arrayJoin
---

`$arrayJoin` rejoindra le tableau avec un séparateur donné.

## Utilisation

```php
$arrayJoin[nom;séparateur?]
```

## Paramètres

| Champ       | Type                 | Description     | Obligatoire |
| ----------- | -------------------- | --------------- |:-----------:|
| nom         | chaîne de caractères | Nom du tableau. |    vrai     |
| séparateur? | chaîne de caractères | Séparateur.     |    faux     |

## Exemple(s)

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[tableau;, ]
  $createArray[tableau;aoi.js;akarui;documents;bot]
  `
});
```