---
title: $addObjectProperty
description: '$addObjectProperty will add a property to an existing object.'
id: addObjectProperty
---

`$addObjectProperty` ajoutera une propriété à un objet existant.

## Utilisation

```php
$addObjectProperty[nom;valeur]
```

## Paramètres

| Champ  | Type                 | Description             | Obligatoire |
| ------ | -------------------- | ----------------------- |:-----------:|
| nom    | chaîne de caractères | Nom de la propriété.    |    vrai     |
| valeur | chaîne de caractères | Valeur de la propriété. |    vrai     |

## Exemple(s)

Cela retournera `Ferel` de la propriété `Leref`:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```
