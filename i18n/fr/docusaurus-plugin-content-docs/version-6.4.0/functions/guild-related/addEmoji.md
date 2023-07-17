---
title: '$addEmoji'
description: '$addEmoji ajoutera un emoji au serveur donné. Si des identifiants de rôle sont donnés, l''emoji ne sera utilisable que par les utilisateurs avec l''un des identifiants de rôle fournis.'
id: addEmoji
---

`$addEmoji` ajoutera un emoji au serveur donné. Si des identifiants de rôle sont donnés, l'emoji ne sera utilisable que par les utilisateurs avec l'un des identifiants de rôle fournis.

## Utilisation

```php
$addEmoji[IDserveur;URL;nom;renvoyerEmoji?;raison?;...rôles?]
```

## Paramètres

| Champ          | Type                 | Description                                       | Obligatoire |
| -------------- | -------------------- | ------------------------------------------------- |:-----------:|
| IDserveur      | entier               | ID du serveur                                     |    vrai     |
| URL            | chaine de caractères | URL d'une image valide                            |    vrai     |
| nom            | chaine de caractères | Nom de l’émoji                                    |    vrai     |
| renvoyerEmoji? | chaîne de caractères | Renvoyer l'émoji créé ?                           |    faux     |
| raison?        | chaine de caractères | raison qui sera affichée dans les logs du serveur |    faux     |
| ...rôles?      | entier               | quels rôles pourront utiliser l'émoji donné       |    faux     |

## Exemple(s)

Ceci va créer un emoji :

```javascript
bot.command({
    name: 'ajouterEmoji',
    code: `
  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]
  `
});
```
