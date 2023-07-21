---
title: '$modifyRole'
description: '$modifyRole modifiera un rôle donné.'
id: modifyRole
---

`$modifyRole` modifiera un rôle donné.

## Utilisation

```php
$modifyRole[IDserveur;IDrôle;...données]
```

## Paramètres

| Champ       | Type                        | Description                           | Obligatoire |
| ----------- | --------------------------- | ------------------------------------- |:-----------:|
| IDserveur   | entier                      | L'ID du serveur où se trouve le rôle. |    vrai     |
| IDrôle      | entier                      | L'ID du rôle à modifier.              |    vrai     |
| ... données | chaîne de caractères, objet | Nouvelles données du rôle.            |    vrai     |

## Exemple(s)

Cela va modifier un rôle existant / changer son nom en "Génial !":

```javascript
bot.command({
    name: 'modifierRôle',
    code: `
  $modifyRole[$guildID;IDrôle;{
    "name": "Génial !"
  }]
  `
});
```