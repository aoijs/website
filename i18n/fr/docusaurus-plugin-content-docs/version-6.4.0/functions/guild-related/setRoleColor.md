---
title: '$setRoleColor'
description: '$setRoleColor définira la couleur d''un rôle.'
id: setRoleColor
---

`$setRoleColor` définira la couleur d'un rôle.

## Utilisation

```php
$setRoleColor[IDrôle;couleur]
```

## Paramètres

| Champ   | Type                 | Description                    | Obligatoire |
| ------- | -------------------- | ------------------------------ |:-----------:|
| IDrôle  | entier               | L'ID du rôle qui sera modifié. |    vrai     |
| couleur | chaîne de caractères | La nouvelle couleur (hex).     |    vrai     |

## Exemple(s)

Cela changera la couleur d'un rôle aléatoire en rouge:

```javascript
bot.command({
    name: 'définirRôleCouleur',
    code: `
   $setRoleColor[$randomRoleID;Red]`
});
```

```javascript
bot.command({
    name: 'définirRôleCouleur',
    code: `
   $setRoleColor[$randomRoleID;ED4245]`
});
```