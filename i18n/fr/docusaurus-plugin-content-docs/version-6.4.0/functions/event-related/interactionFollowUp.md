---
title: '$interactionFollowUp'
description: '$interactionFollowUp peut être utilisé pour les requêtes JSON, les informations sur les chansons ou la lecture de pistes, car ces opérations prennent plus de 3 secondes.'
id: interactionFollowUp
---

`$interactionFollowUp` peut être utilisé pour les requêtes JSON, les informations sur les chansons ou la lecture de pistes, car ces opérations prennent plus de 3 secondes.

## Utilisation

```php
$interactionFollowUp[contenu?;embeds?;composants?;fichiers?;éphémère?]
```

## Paramètres

| Champ       | Type                 | Description                                                                                                     | Obligatoire |
| ----------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |:-----------:|
| contenu?    | chaîne de caractères | Contenu du message.                                                                                             |    faux     |
| embeds?     | chaîne de caractères | Embed parser.                                                                                                   |    faux     |
| composants? | chaîne de caractères | Composant parser.                                                                                               |    faux     |
| fichiers?   | chaîne de caractères | Fichier parser.                                                                                                 |    faux     |
| éphémère?   | booléen              | Visible uniquement par l'auteur de la commande? <br /> 1. **true** <br /> 2. **false** (par defaut) |    faux     |

## Exemple(s)

```javascript
bot.interactionCommand({
    name: "interactionFollowUp",
    prototype: "slash",
    code: `
  $interactionFollowUp[Aurevoir, tout le monde!]
  $interactionDefer[true]
  `
});
```
