---
title: '$setRoles'
description: '$setRoles définira les rôles d''un membre.'
id: setRoles
---

`$setRoles` définira les rôles d'un membre.

## Utilisation

```php
$setRoles[IDserveur;IDmembre;raison?;...IDsRôles]
```

## Paramètres

| Champ       | Type                 | Description                                                                | Obligatoire |
| ----------- | -------------------- | -------------------------------------------------------------------------- |:-----------:|
| IDserveur   | entier               | L'ID du serveur où les rôles des utilisateurs seront supprimés ou ajoutés. |    vrai     |
| IDmembre    | entier               | L'ID du membre du serveur.                                                 |    vrai     |
| raison?     | chaîne de caractères | La raison qui sera affichée dans les logs du serveur.                      |    faux     |
| ...IDsRôles | entier               | Les Identifiants des rôles.                                                |    vrai     |

## Exemple(s)

Ceci supprimera ou ajoutera des rôles spécifiques à vous:

```javascript
bot.command({
    name: 'définirRôles',
    code: `
   $setRoles[$guildID;$authorID;Test.;IDrôle1;IDrôle2;IDrôle3;....]`
});
```