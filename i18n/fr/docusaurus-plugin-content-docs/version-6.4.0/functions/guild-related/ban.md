---
title: '$ban'
description: '$ban va bannir un utilisateur d''un serveur donnée.'
id: ban
---

`$ban` va bannir un utilisateur d'un serveur.

## Utilisation

```php
$ban[IDserveur;IDutilisateur;jours?;raison?]
```

## Paramètres

| Champ         | Type                 | Description                                                                               | Obligatoire |
| ------------- | -------------------- | ----------------------------------------------------------------------------------------- |:-----------:|
| IDserveur     | entier               | Dans quel serveur l'utilisateur doit être banni?                                          |    vrai     |
| IDutilisateur | entier               | L'utilisateur à bannir.                                                                   |    vrai     |
| jours?        | chaine de caractères | Nombre de jours d'historique de message à supprimer, ne peut pas être supérieur à 7 jours |    faux     |
| raison?       | chaîne de caractères | La raison qui sera affichée dans les logs du serveur.                                     |    faux     |

## Exemple(s)

Ceci va bannir un utilisateur aléatoire de votre serveur :

```javascript
bot.command({
    name: 'ban',
    code: `
  $ban[$guildID;$randomUserID;7;Imagine tu te fais bannir.]
  `
});
```
