---
title: '$getReactions'
description: '$getReactions retournera des propriétés à propos d''une réaction donnée sur un message spécifique.'
id: getReactions
---

`$getReactions` renverra des propriétés à propos d'une réaction donnée sur un message spécifique.

## Utilisation

```php
$getReactions[IDsalon;IDmessage;réaction;forcer?;option?]
```

## Paramètres

| Champ     | Type                 | Description                                                                                                                                                                                                                                                        | Obligatoire |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:-----------:|
| IDsalon   | entier               | ID du salon dans lequel se trouve le message.                                                                                                                                                                                                                      |    vrai     |
| IDmessage | entier               | ID du message.                                                                                                                                                                                                                                                     |    vrai     |
| réaction  | chaîne de caractères | La réaction dont les informations seront retournées.                                                                                                                                                                                                               |    vrai     |
| forcer?   | booléen              | 1. **true** (par défaut) <br /> 2. **Faux**                                                                                                                                                                                                                  |    Faux     |
| option ?  | chaîne de caractères | Comment cela renverra les utilisateurs qui ont réagi à ce message <br /> 1. **username** (par défaut) - retourne les noms d'utilisateur   <br /> 2. **mention** - mentionne les utilisateurs <br /> 3. **id** - renvoie les IDs des utilisateurs |    Faux     |

**Veuillez noter que cela ne fonctionnera pas sans l'intention `GuildMessageReactions`.**

## Exemple(s)

Ceci mentionnera tous les utilisateurs qui ont réagi à votre message, dans ce cas, seulement votre bot :

```javascript
bot.command({
    name: 'getReactions',
    code: `

$getReactions[$channelID;$messageID;👋;true;mention]
$addCmdReactions[👋]
  `
});
```