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

| Champ     | Type                         | Description                               | Obligatoire |
| --------- | ---------------------------- | ----------------------------------------- |:-----------:|
| IDserveur | entier                       | L'ID du serveur où se trouvent les rôles. |     oui     |
| ...roles  | entier, chaîne de caractères | l'IDs des rôles.                          |    true     |

## Exemple(s)

Ceci supprimer des rôles de votre serveur. (assurez-vous d'ajouter les identifiants réels):

```javascript
bot.command({
    name: 'supprimerRôles',
    code: `
  Rôles supprimés!
  $deleteRoles[$guildID;roleID1;roleID2;roleID3]
  `
});
```