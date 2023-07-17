---
title: '$reactionCollector'
description: '$reactionCollector va créer un collecteur de réactions sur un message donné.'
id: reactionCollector
---

`$reactionCollector` va créer un collecteur de réactions sur un message donné.

## Utilisation

```php
$reactionCollector[IDsalon;IDmessage;filtreUtilisateur;temps;réactions;commandesAttendues;retirerRéaction?;donnéesAttendues?;finAttente?]
```

## Paramètres

| Champ              | Type                 | Description                                                                                                                                     | Obligatoire |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon            | entier               | ID du salon                                                                                                                                     |    vrai     |
| IDmessage          | entier               | ID du message                                                                                                                                   |    vrai     |
| filtreUtilisateur  | chaîne de caractères | à ce que le bot répondra <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur |    vrai     |
| temps              | chaîne de caractères | quand la commande se termine/expire                                                                                                             |    vrai     |
| réactions          | chaîne de caractères | réactions, vous pouvez séparer plusieurs émoticônes par une virgule ( `,`)                                                                      |    vrai     |
| commandesAttendues | chaîne de caractères | Commandes qui seront exécutées, vous pouvez séparer plusieurs commandes par une virgule ( `,`)                                                  |    vrai     |
| retirerRéaction?   | chaîne de caractères | supprimer les réactions après l'exécution des commandes                                                                                         |    faux     |
| donnéesAttendues?  | chaîne de caractère  | Données attendues                                                                                                                               |    faux     |
| finAttente?        | chaîne de caractère  | fin de la commande attendue / commande attendue à exécuter lorsque le minuteur se termine                                                       |    faux     |

## Exemple(s)

Ceci enverra un message lorsque vous ajouterez une réaction :

```js
bot.command({
    name: "reactionCollector",
    code: `
  $reactionCollector[$channelID;$splitText[1];$authorID;10m;👀;awaitReaction;;true]
  $textSplit[$sendMessage[Réagissez avec "👀" pour quelque chose de spécial !;true]; ]
  `
});

bot.awaitedCommand({
    name: "awaitReaction",
    code: `
  $sendMessage[👀 qu'est-ce que c'est ?]
  `
});
```

