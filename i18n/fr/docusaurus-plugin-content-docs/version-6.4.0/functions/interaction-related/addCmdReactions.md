---
title: '$addCmdReactions'
description: '$addCmdReactions réagira avec des émoticônes données au message de l''auteur.'
id: addCmdReactions
---

`$addCmdReactions` réagira avec des émoticônes données au message de l'auteur.

## Utilisation

```php
$addCmdReactions[...réactions]
```

## Paramètres

| Champ     | Type                 | Description          | Obligatoire |
| --------- | -------------------- | -------------------- |:-----------:|
| réactions | chaîne de caractères | Réactions à ajouter. |    vrai     |

## Exemple(s)

Cela ajoutera les émoticônes données au message de l'auteur :

```javascript
bot.command({
    name: 'addCmdReactions',
    code: `
Réactions ajoutées !
$addCmdReactions[🧡;❤]
  `
});
```
