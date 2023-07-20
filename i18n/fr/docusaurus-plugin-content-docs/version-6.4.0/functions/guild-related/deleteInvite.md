---
title: '$deleteInvite'
description: '$deleteInvite supprime une invitation spécifique dans un serveur.'
id: deleteInvite
---

`$deleteInvite` supprime une invitation spécifique dans un serveur.

## Usage

```php
$deleteInvite[IDserveur;CodeInvitation;raison?]
```

## Paramètres

| Champ          | Type                 | Libellé                                            | Requis |
| -------------- | -------------------- | -------------------------------------------------- |:------:|
| IDserveur      | entier               | Le serveur dans lequel l'invitation sera supprimé. |  vrai  |
| CodeInvitation | chaîne de caractères | Le code d'invitation spécifique.                   |  vrai  |
| raison?        | chaîne de caractères | Raison qui sera affichée dans les logs du serveur. |  faux  |

## Exemple(s)

Ceci supprimera une invitation (ne fonctionnera pas car le code d'invitation n'existe pas):

```javascript
bot.command({
    name: 'supprimerInvitation',
    code: `
  $deleteInvite[$guildID;ifawd9a;Test!]
  `
});
```