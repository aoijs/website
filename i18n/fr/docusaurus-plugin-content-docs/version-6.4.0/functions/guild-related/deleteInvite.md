---
title: '$deleteInvite'
description: '$deleteInvite supprime une invitation spécifique dans un serveur.'
id: deleteInvite
---

`$deleteInvite` supprime une invitation spécifique dans un serveur.

## Utilisation

```php
$deleteInvite[IDserveur;CodeInvitation;raison?]
```

## Paramètres

| Champ          | Type                 | Description                                        | Obligatoire |
| -------------- | -------------------- | -------------------------------------------------- |:-----------:|
| IDserveur      | entier               | Le serveur dans lequel l'invitation sera supprimé. |     oui     |
| CodeInvitation | chaine de caractères | Le code d'invitation spécifique.                   |    true     |
| raison?        | booléen              | Raison qui sera affichée dans les logs du serveur. |    faux     |

## Exemple(s)

Ceci supprimera une invitation (ne fonctionnera pas car le code d'invitatio n'existe pas):

```javascript
bot.command({
    name: 'supprimerInvitation',
    code: `
  $deleteInvite[$guildID;ifawd9a;Test!]
  `
});
```