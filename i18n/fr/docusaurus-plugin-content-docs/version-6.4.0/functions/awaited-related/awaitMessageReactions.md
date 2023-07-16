---
title: '$awaitMessageReactions'
description: '$awaitMessageReactions répondra lorsqu''un utilisateur réagira avec un émoji spécifique.'
id: awaitMessageReactions
---

`$awaitMessageReactions` répondra lorsqu'un utilisateur réagira avec un émoji spécifique.

## Utilisation

```php
$awaitMessageReactions[IDsalon;IDmessage;filtreUtilisateur;temps;réactions;commandes;messageD'erreur?;donnéesAttendues?]
```

## Paramètres

| Champ             | Type                 | Description                                                                                                                                     | Obligatoire |
| ----------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon           | entier               | ID du salon.                                                                                                                                    |    vrai     |
| IDmessage         | entier               | ID du message.                                                                                                                                  |    vrai     |
| filtreUtilisateur | chaîne de caractères | À ce que le bot répondra <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur |    vrai     |
| temps             | chaîne de caractères | Combien de temps la commande durera / quand la commande expire.                                                                                 |    vrai     |
| réactions         | chaîne de caractères | Réactions, vous pouvez en ajouter plusieurs en les séparant par des virgules ( `,`)                                                             |    vrai     |
| commandes         | chaîne de caractères | Commandes qui seront exécutées, vous pouvez séparer plusieurs commandes par une virgule ( `,`)                                                  |    vrai     |
| MessageD'erreur?  | chaîne de caractères | Message d'erreur lorsque la commande expire.                                                                                                    |    faux     |
| donnéesAttendues? | chaîne de caractère  | Données attendues.                                                                                                                              |    faux     |

**Assurez-vous d'avoir `GuildMessageReactions` comme intention dans votre fichier principal.**

## Exemple(s)

Ceci vous répondra lorsque vous réagissez avec l'émoji "❤️" au message du bot :

```js
bot.command({
    name: "awaitMessageReactions",
    code: `
  Réagissez avec "❤️" pour une surprise ! 
  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;❤️;awaitedcommandexample;Oups ! Vous n'avez pas répondu dans les temps...]
  `
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Joli, vous avez réagi avec ❤️.
  `
});
```
