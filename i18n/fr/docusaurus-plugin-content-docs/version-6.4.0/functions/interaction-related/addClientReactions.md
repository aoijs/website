---
title: '$addClientReactions'
description: '$addClientReactions ajoutera une réaction au message du bot.'
id: addClientReactions
---

`$addClientReactions` ajoutera une réaction au message du bot.

## Utilisation

```php
$addClientReactions[...réactions]
```

## Paramètres

| Champ     | Type                 | Description          | Obligatoire |
| --------- | -------------------- | -------------------- |:-----------:|
| réactions | chaîne de caractères | Réactions à ajouter. |    vrai     |

## Exemple(s)

Ceci ajoutera l'émoji donné à la réponse du bot ("Bonjour!"):

```javascript
bot.command({
    name: 'addClientReactions',
    code: `
    Bonjour!
    $addClientReactions[🧡;❤]
  `
});
```