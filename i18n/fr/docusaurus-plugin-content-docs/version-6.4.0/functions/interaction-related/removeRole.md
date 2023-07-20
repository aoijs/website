---
title: '$removeRole'
description: '$removeRole supprimera un rôle donné à un membre donné.'
id: removeRole
---

`$removeRole` supprimera un rôle donné à un membre donné.

## Utilisation

```php
$removeRole[IDserveur;IDutilisateur;IDrôle;raison?]
```

## Paramètres

| Champ         | Type                 | Description                                              | Obligatoire |
| ------------- | -------------------- | -------------------------------------------------------- |:-----------:|
| IDserveur     | entier               | L'ID du serveur où se trouvent l'utilisateur et le rôle. |    vrai     |
| IDutilisateur | entier               | L'ID de l'utilisateur dont le rôle sera supprimé.        |    vrai     |
| IDrôle        | entier               | L'ID du rôle qui sera supprimé.                          |    vrai     |
| raison?       | chaîne de caractères | La raison qui sera affichée dans les logs du serveur.    |    Faux     |

## Exemple(s)

Cela supprimera un rôle donné de vous-même (le rôle doit être en dessous du rôle le plus élevé du bot) :

```javascript
bot.command({
    name: 'removeRole',
    code: `
   $removeRole[$guildID;$authorID;IDrôle;Une raison.]`
});
```