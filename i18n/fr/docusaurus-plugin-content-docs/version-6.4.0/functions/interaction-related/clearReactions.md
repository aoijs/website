---
title: '$clearReactions'
description: '$clearReactions supprimera une ou toutes les réactions d''un message.'
id: clearReactions
---

`$clearReactions` supprimera une ou toutes les réactions d'un message.

## Utilisation

```php
$clearReactions[IDsalon;IDmessage;émoji]
```

## Paramètres

| Champ     | Type                 | Description                                                                                                | Obligatoire |
| --------- | -------------------- | ---------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon   | entier               | L'ID du salon où se trouve le message.                                                                     |    vrai     |
| IDmessage | entier               | L'ID du message.                                                                                           |    vrai     |
| émoji     | chaîne de caractères | L'émoji à supprimer. <br /> 1. **all** (par défaut) <br /> 2. **émoji** - n'importe quel émoji |    vrai     |

## Exemple(s)

Cela ajoutera deux émojis et en supprimera un complètement :

```javascript
bot.command({
    name: 'clearReactions',
    code: `
  
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]

  $addCmdReactions[🥱;😩]
 `
});
```
