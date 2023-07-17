---
title: '$addThreadMember'
description: '$addThreadMember ajoutera un membre à un fil.'
id: addThreadMember
---

`$addThreadMember` ajoutera un membre à un fil.

## Utilisation

```php
$addThreadMember[IDsalon;IDfil;IDutilisateur;raison]
```

## Paramètres

| Champ         | Type                 | Description                                           | Obligatoire |
| ------------- | -------------------- | ----------------------------------------------------- |:-----------:|
| IDsalon       | entier               | ID du salon où se trouve le fil.                      |    vrai     |
| IDfil         | entier               | L'ID du fil.                                          |    vrai     |
| IDutilisateur | entier               | L'utilisateur qui doit être ajouté au fil.            |    vrai     |
| raison        | chaîne de caractères | La raison qui sera affichée dans les logs du serveur. |    vrai     |

## Exemple(s)

Ceci va créer un fil de discussion et ajouter un utilisateur aléatoire à celui-ci :

```javascript
bot.command({
    name: 'filAjouterMembre',
    code: `
  $addThreadMember[$channelID;$get[id];$randomUserID;test]
  $let[id;$createThread[$channelID;exemple;1440;public;$messageID;true]]  
  `
});
```
