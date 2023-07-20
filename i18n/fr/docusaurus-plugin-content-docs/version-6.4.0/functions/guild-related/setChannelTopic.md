---
title: '$setChannelTopic'
description: '$setChannelTopic modifiera le sujet d''un salon.'
id: setChannelTopic
---

`$setChannelTopic` modifiera le sujet d'un salon.

## Utilisation

```php
$setChannelTopic[IDsalon;sujet]
```

## Paramètres

| Champ   | Type                 | Description                               | Obligatoire |
| ------- | -------------------- | ----------------------------------------- |:-----------:|
| IDsalon | entier               | L'ID du salon dont le sujet sera modifié. |    vrai     |
| sujet   | chaîne de caractères | Nouveau sujet du salon.                   |    vrai     |

## Exemple(s)

Cela changera le sujet du salon dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'définirSujetSalon',
    code: `
   $setChannelTopic[$channelID;Bonjour! Ceci est le nouveau sujet du salon!]`
});
```