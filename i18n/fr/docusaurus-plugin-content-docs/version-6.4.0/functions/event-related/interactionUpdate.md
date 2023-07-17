---
title: '$interactionUpdate'
description: '$interactionUpdate mettra à jour une interaction existante.'
id: interactionUpdate
---

`$interactionUpdate` mettra à jour une interaction existante.

## Utilisation

```php
$interactionUpdate[contenu?;embeds?;composants?;fichiers?]
```

## Paramètres

| Champ       | Type                 | Description                 | Obligatoire |
| ----------- | -------------------- | --------------------------- |:-----------:|
| contenu?    | chaîne de caractères | Nouveau contenu du message. |    faux     |
| embeds?     | chaîne de caractères | Embed parser.               |    faux     |
| composants? | chaîne de caractères | Composant parser.           |    faux     |
| fichiers?   | chaîne de caractères | Fichier parser.             |    faux     |

## Exemple(s)

```javascript
bot.interactionCommand({
    name: "interactionUpdate",
    prototype: "slash",
    code: `
  $interactionReply[Bonjour, tout le monde!;;{actionRow:{button:Bouton d'exemple!:primary:customID:false}};;everyone;false]
  `
});
```

```js
bot.interactionCommand({
    name: "customID",
    prototype: "button",
    code: `
  $interactionUpdate[Aurevoir, tout le monde!]
  `
});
```