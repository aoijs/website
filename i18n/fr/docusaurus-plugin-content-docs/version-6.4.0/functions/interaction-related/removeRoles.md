---
title: '$removeRoles'
description: '$removeRoles supprimera un ou plusieurs rôles d''un membre donné.'
id: removeRoles
---

`$removeRoles` supprimera un ou plusieurs rôles d'un membre donné.

## Utilisation

```php
$removeRoles[IDserveur;IDutilisateur;raison?;...IDsRôles]
```

## Paramètres

| Champ         | Type                 | Description                                                | Obligatoire |
| ------------- | -------------------- | ---------------------------------------------------------- |:-----------:|
| IDserveur     | entier               | L'ID du serveur où se trouvent l'utilisateur et les rôles. |    vrai     |
| IDutilisateur | entier               | L'ID de l'utilisateur dont les rôles seront supprimés.     |    vrai     |
| raison?       | chaîne de caractères | La raison qui sera affichée dans les logs du serveur.      |    Faux     |
| ...roleIDs    | entier               | Les identifiants des rôles qui seront supprimés.           |    vrai     |

## Exemple(s)

Cela supprimera les rôles donnés de vous-même (les rôles doivent être en dessous du rôle le plus élevé du bot) :

```javascript
bot.command({
    name: 'removeRoles',
    code: `
   $removeRoles[$guildID;$authorID;Une raison..;IDrôle;IDrôle;...]`
});
```