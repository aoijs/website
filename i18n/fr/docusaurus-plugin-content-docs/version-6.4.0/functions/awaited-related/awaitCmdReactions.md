---
title: '$awaitCmdReactions'
description: '$awaitCmdReactions répond lorsqu''un utilisateur réagit au message de la commande avec un émoji spécifique.'
id: awaitCmdReactions
---

`$awaitCmdReactions` répond lorsqu'un utilisateur réagit au message de la commande avec un émoji spécifique.

## Utilisation

```php
$awaitCmdReactions[filtreUtilisateur;temps;réactions;commandes;MessageD'erreur?;donnéesAttendues?]
```

## Paramètres

| Champ             | Type                 | Description                                                                                                                                     | Obligatoire |
| ----------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| filtreUtilisateur | chaîne de caractères | À ce que le bot répondra <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur |    vrai     |
| temps             | chaîne de caractères | Combien de temps la commande durera / quand la commande expire.                                                                                 |    vrai     |
| réactions         | chaîne de caractères | Les réactions que le bot écoutera, vous pouvez séparer plusieurs émoticônes par une virgule ( `,`)                                              |    vrai     |
| commandes         | chaîne de caractères | Commandes qui seront exécutées, vous pouvez séparer plusieurs commandes par une virgule ( `,`)                                                  |    true     |
| messageD'erreur?  | chaîne de caractères | Message d'erreur lorsque la commande expire.                                                                                                    |    faux     |
| donnéesAttendues? | chaîne de caractères | Données attendues.                                                                                                                              |    faux     |

**Assurez-vous d'avoir `GuildMessageReactions` comme intention dans votre fichier principal.**

## Exemple(s)

Ceci vous répondra lorsque vous réagissez avec l'émoji "❤️" à votre message de commande :

```js
bot.command({
    name: "awaitCmdReaction",
    code: `
  Réagissez avec "❤️" pour une surprise ! 
  $awaitCmdReactions[$authorID;10s;❤️;awaitedCommandExample;Oups ! Vous n'avez pas réagi dans les temps...]
  `
});

bot.awaitedCommand({
    name: "awaitedCommandExample",
    code: `
  Joli, vous avez réagi avec ❤️.
  `
});
```