---
title: '$giveRoles'
description: '$giveRoles donnera à un utilisateur spécifique plusieurs ou un rôle spécifique.'
id: giveRoles
---

`$giveRoles` donnera à un utilisateur spécifique plusieurs ou un ou plusieurs rôle(s).

## Utilisation

```php
$giveRoles[IDserveur;IDutilisateur;raison?;...roles]
```

## Paramètres

| Champ         | Type                 | Description                                           | Obligatoire |
| ------------- | -------------------- | ----------------------------------------------------- |:-----------:|
| IDserveur     | entier               | Dans quel serveur le membre devra recevoir le rôle.   |    vrai     |
| IDutilisateur | entier               | L'ID du membre du serveur.                            |    vrai     |
| raison?       | chaîne de caractères | La raison qui sera affichée dans les logs du serveur. |    faux     |
| ...rôles      | entier               | Les identifiants des rôles à ajouter au membre.       |    vrai     |

Veuillez noter que le rôle **le plus haut** entre tous les rôles à ajouter et celui du bot, doit être celui du bot.

## Exemple(s)

Cela vous assignera deux rôles appelés "administrateur" et "modérateur" (si existant):

```javascript
bot.command({
    name: 'ajouterRôles',
    code: `
  
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[administrateur];$findRole[modérateur]]
  `
});
```