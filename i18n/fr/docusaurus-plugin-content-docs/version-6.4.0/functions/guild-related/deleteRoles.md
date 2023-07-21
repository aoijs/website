---
title: '$deleteRoles'
description: '$deleteRoles supprimera un ou plusieurs rôles.'
id: deleteRoles
---

`$deleteRoles` supprimera un ou plusieurs rôles.

## Utilisation

```php
$deleteRoles[IDserveur;...rôles]
```

## Paramètres

| Champ           | Type                         | Description                               | Obligatoire |
| --------------- | ---------------------------- | ----------------------------------------- |:-----------:|
| ID de la guilde | entier                       | L'ID du serveur où se trouvent les rôles. |    vrai     |
| ...roles        | entier, chaîne de caractères | l'IDs des rôles.                          |    vrai     |

## Exemple(s)

Ceci supprimer des rôles de votre serveur. (assurez-vous d'ajouter les identifiants réels):

```javascript
bot.command({
    name: 'supprimerRôles',
    code: `
  Rôles supprimés!
  $deleteRoles[$guildID;IDrole1;IDrole2;IDrole3]
  `
});
```