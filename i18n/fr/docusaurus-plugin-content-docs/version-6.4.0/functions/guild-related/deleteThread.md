---
title: '$deleteThread'
description: '$deleteThread supprimera le fil donné d''un salon.'
id: deleteThread
---

`$deleteThread` supprimera le fil donné d'un salon.

## Utilisation

```php
$deleteThread[IDsalon;IDfil;raison?]
```

## Paramètres

| Champ   | Type de texte        | Description                                                         | Obligatoire |
| ------- | -------------------- | ------------------------------------------------------------------- |:-----------:|
| IDsalon | entier               | L'ID du salon dans lequel le fil se situe.                          |    vrai     |
| IDfil   | entier               | L'ID du fil de discussion.                                          |    vrai     |
| raison? | chaîne de caractères | La raison qui sera affichée dans les journaux d'audit de la guilde. |    faux     |

## Exemple(s)

Ceci supprimera le fil du salon dans lequel la commande est exécuté (assurez-vous de remplacer IDfil par un actuel ID de fil ):

```javascript
bot.command({
    name: 'supprimerFil',
    code: `
  $deleteThread[$channelID;IDfil;Test.]
  `
});
```