---
title: '$giveRole'
description: '$giveRole donnera un rôle spécifique à un utilisateur spécifique.'
id: giveRole
---

`$giveRole` donnera à un utilisateur spécifique un rôle spécifique.

## Utilisation

```php
$giveRole[IDserveur;IDutilisateur;IDrole;raison?]
```

## Paramètres

| Champ         | Type                 | Description                                           | Obligatoire |
| ------------- | -------------------- | ----------------------------------------------------- |:-----------:|
| IDserveur     | entier               | Dans quel serveur le membre doit recevoir ce rôle.    |    vrai     |
| IDutilisateur | entier               | L'ID de l'utilisateur membre du serveur.              |    vrai     |
| IDrole        | entier               | L'ID du rôle à donner.                                |    vrai     |
| raison?       | chaîne de caractères | La raison qui sera affichée dans les logs du serveur. |    faux     |

Veuillez noter que le rôle **le plus haut** entre celui que vous essayez d'attribuer et celui du bot, doit être celui du bot.

## Exemple(s)

Cela vous assignera un rôle appelé "administrateur" (si existant):

```javascript
bot.command({
    name: 'giveRole',
    code: `
  $giveRole[$guildID;$authorID;$findRole[administrateur];Une raison.]
  `
});
```