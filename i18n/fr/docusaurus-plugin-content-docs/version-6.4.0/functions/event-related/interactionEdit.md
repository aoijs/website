---
title: '$interactionEdit'
description: '$interactionEdit retournera une interaction de modification.'
id: interactionEdit
---

`$interactionEdit` retournera une interaction de modification.

## Utilisation

```php
$interactionEdit[contenu?;embeds?;composants?;fichiers?;autoriserMentions?]
```

## Paramètres

| Champ              | Type                 | Description                                                                                           | Obligatoire |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------- |:-----------:|
| contenu?           | chaîne de caractère  | Nouveau contenu du message.                                                                           |    faux     |
| embeds?            | chaîne de caractère  | Embed parser.                                                                                         |    faux     |
| composants?        | chaîne de caractères | Composant parser.                                                                                     |    faux     |
| fichiers?          | chaîne de caractères | Fichier parser.                                                                                       |    faux     |
| autoriserMentions? | chaîne de caractères | Mentions autorisées? <br /> 1. **users** <br /> 2. **roles** <br /> 3. **everyone** |    faux     |

## Exemple(s)

```javascript
bot.interactionCommand({
    name: "interactionEdit",
    prototype: "slash",
    code: `
  $interactionEdit[Aurevoir, tout le monde!;;;;everyone]
  $wait[5s]
  $interactionReply[Bonjour, tout le monde!;;;;everyone;false]
  `
});
```
