---
title: '$awaitMessages'
description: '$awaitMessages répondra une fois qu''un message a été envoyé par l''utilisateur donné.'
id: awaitMessages
---

`$awaitMessages` répondra une fois qu'un message a été envoyé par l'utilisateur donné.

## Utilisation

```php
$awaitMessages[IDsalon;filtreUtilisateur;temps;réponses;commandes;messageD'erreur?;donnéesAttendues?;dm?]
```

## Paramètres

| Champ             | Type                 | Description                                                                                                                                 | Obligatoire |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |:-----------:|
| IDsalon           | entier               | ID du salon.                                                                                                                                |    vrai     |
| filtreUtilisateur | entier               | Filtre d'utilisateur <br /> 1. **everyone** <br /> 2. **Identifiant spécifique d'utilisateur** - tout identifiant d'utilisateur |    vrai     |
| temps             | chaîne de caractères | Combien de temps la commande durera / quand la commande expire.                                                                             |    vrai     |
| réponses          | chaîne de caractères | À ce à quoi le bot répondra, plusieurs mots peuvent être séparés par une virgule (ou utiliser "everything" pour répondre à tout)            |    vrai     |
| commandes         | chaîne de caractères | Les commandes qui seront exécutées, plusieurs commandes peuvent être séparées par une virgule.                                              |    vrai     |
| messageD'erreur?  | chaîne de caractères | Message d'erreur lorsque la commande expire.                                                                                                |    faux     |
| donnéesAttendues? | chaîne de caractères | Données attendues.                                                                                                                          |    faux     |
| dm?               | entier               | ID de l'utilisateur de l'endroit où la commande peut être exécutée.                                                                         |    faux     |

## Exemple(s)

Ceci répondra à n'importe quel message que vous envoyez après avoir exécuté la commande :

```js
bot.command({
    name: "awaitMessages",
    code: `
  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh ? Vous ne voulez pas me parler..?] 
  Quel est votre prénom ?
  `
    // Veuillez vous assurer que le nom de la commande attendue est TOUT en minuscule, sinon cela ne fonctionnera pas.
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
    Ravi de vous rencontrer, $message!
  `
});
```
