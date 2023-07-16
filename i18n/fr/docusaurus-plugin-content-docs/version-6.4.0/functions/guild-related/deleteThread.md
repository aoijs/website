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

| Champ   | Type    | Description                                           | Obligatoire |
| ------- | ------- | ----------------------------------------------------- |:-----------:|
| IDsalon | entier  | L'ID du salon dans lequel le fil se situe.            |     oui     |
| IDfil   | entier  | L'ID du fil.                                          |    true     |
| raison? | booléen | La raison qui sera affichée dans les logs du serveur. |    faux     |

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