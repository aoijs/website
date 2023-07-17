---
title: '$interactionReply'
description: '$interactionReply vous permet d''envoyer une réponse au message d''interaction.'
id: interactionReply
---

`$interactionReply` vous permet d'envoyer une réponse au message d'interaction.

## Utilisation

```php
$interactionReply[contenu?;embeds?;composants?;fichiers?;autoriserMentions?;éphémère ?]
```

## Paramètres

| Champ              | Type                 | Description                                                                                                      | Obligatoire |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------- |:-----------:|
| contenu?           | chaîne de caractères | Contenu du message.                                                                                              |    faux     |
| embeds?            | chaîne de caractères | Embed parser.                                                                                                    |    faux     |
| composants?        | chaîne de caractères | Composant parser.                                                                                                |    faux     |
| fichiers?          | chaîne de caractères | Fichier parser.                                                                                                  |    faux     |
| autoriserMentions? | chaîne de caractères | Mentions autorisées? <br /> 1. **everyone** <br /> 2. **roles** <br /> 3. **users**            |    faux     |
| éphémère?          | booléen              | Visible uniquement par l'auteur de la commande ? <br /> 1. **true** <br /> 2. **false** (par defaut) |    faux     |

## Exemple(s)

```javascript
bot.interactionCommand({
    name: "interactionReply",
    prototype: "slash", // button/selectMenu/slash
    code: `
  $interactionReply[Bonjour, tout le monde!;;;;everyone;false]
  `
});
```
