---
title: '$boostingSince'
description: '$boostingSince renvoie la date de début du boost de d''un membre d''un serveur spécifique.'
id: boostingSince
---

`$boostingSince` renvoie la date de début du boost de d'un membre d'un serveur spécifique.

## Usage

```php
$boostingSince[IDserveur?;IDutilisateur?;format?]
```

## Paramètres

| Champ          | Type                 | Description                                                                      | Obligatoire |
| -------------- | -------------------- | -------------------------------------------------------------------------------- |:-----------:|
| IDserveur?     | entier               | L'ID de la guilde où vous voulez vérifier combien de temps quelqu'un a boosté.   |    Faux     |
| IDutilisateur? | entier               | L'identifiant d'utilisateur dont vous voulez vérifier la date de début de boost. |    Faux     |
| format?        | chaîne de caractères | Le format dans lequel la date sera retournée, listé ci-dessous.                  |    Faux     |

| Formater |                                                             |
| -------- | ----------------------------------------------------------- |
| ms       | 1652643158052                                               |
| date     | Sun May 15 2022 20:32:38 GMT+0100 (Heure d'été britannique) |

## Exemple(s)

Cela retournera la date à laquelle vous avez commencé à booster (ne fonctionnera pas lorsque vous ne boosterez pas) :

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```