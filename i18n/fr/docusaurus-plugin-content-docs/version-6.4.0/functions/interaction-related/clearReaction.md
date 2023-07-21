---
title: '$clearReaction'
description: '$clearReaction supprimera une réaction donnée d''un message d''un utilisateur donné.'
id: clearReaction
---

`$clearReaction` supprimera une réaction donnée d'un message d'un utilisateur donné.

## Utilisation

```php
$clearReaction[IDsalon;IDmessage;IDutilisateur;émoji]
```

## Paramètres

| Champ         | Type                 | Description                                                                                                      | Obligatoire |
| ------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon       | entier               | L'ID du salon où se trouve le message.                                                                           |    vrai     |
| IDmessage     | entier               | L'ID du message.                                                                                                 |    vrai     |
| IDutilisateur | entier               | L'identifiant de l'utilisateur dont les réactions seront supprimées.                                             |    vrai     |
| émoji         | chaîne de caractères | L'émoji exact à supprimer. <br /> 1. **all** (par défaut) <br /> 2. **émoji** - n'importe quel émoji |    vrai     |

## Exemple(s)

Cela ajoutera et supprimera la réaction du bot après deux secondes :

```javascript
bot.command({
    name : 'clearReaction',
    code: `
  
  $clearReaction[$channelID;$messageID;$clientID;🥱]
  $wait[2s]
  $addCmdReactions[🥱]
  `
});
```
