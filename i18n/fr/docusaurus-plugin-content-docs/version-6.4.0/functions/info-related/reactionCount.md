---
title: '$reactionCount'
description: '$reactionCount retournera le nombre d''utilisateurs qui ont réagi à un emoji spécifique.'
id: reactionCount
---

`$reactionCount` renverra le nombre d'utilisateurs qui ont réagi à un émoji spécifique.

## Utilisation

```php
$reactionCount[IDsalon;IDmessage;émoji]
```

## Paramètres

| Champ     | Type                 | Description                                       | Obligatoire |
| --------- | -------------------- | ------------------------------------------------- |:-----------:|
| IDsalon   | entier               | ID du salon dans lequel se trouve le message.     |    vrai     |
| IDmessage | entier               | L'ID du message.                                  |    vrai     |
| émoji     | chaîne de caractères | L'émoji dont le nombre de réactions sera renvoyé. |    vrai     |

## Exemple(s)

Cela retournera le nombre de réactions sur votre message avec lequel vous avez exécuté la commande, renverra probablement `1` car le bot est le seul à y avoir réagi :

```javascript
bot.command({
    name: 'reactionCount',
    code: `
Il y a : $reactionCount[$channelID;$messageID;😫] réactions !
$addCmdReactions[😫]
`
});
```
