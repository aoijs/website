---
title: '$createSticker'
description: '$createSticker créera un autocollant.'
id: createSticker
---

`$createSticker` créera un autocollant.

## Utilisation

```php
$createSticker[IDserveur;URL;nom;renvoyerAutocollant?;tags;description?;raison?]
```

## Paramètres

| Champ                | Type                 | Description                                                                                              | Obligatoire |
| -------------------- | -------------------- | -------------------------------------------------------------------------------------------------------- |:-----------:|
| IDserveur            | entier               | ID du serveur où l'autocollant sera créé.                                                                |    vrai     |
| URL                  | chaine de caractères | Lien d'une image (**format png seulement**).                                                             |    vrai     |
| nom                  | chaine de caractères | Le nom de l'autocollant.                                                                                 |    vrai     |
| renvoyerAutocollant? | booléen              | Renvoie l'autocollant après sa création. <br /> 1. **true** <br /> 2. **false** (par défaut) |    faux     |
| tags?                | chaine de caractères | Tags de l'autocollant.                                                                                   |    faux     |
| description?         | chaîne de caractères | La description de l'autocollant.                                                                         |    faux     |
| raison?              | chaîne de caractères | Raison qui sera affichée dans les logs du serveur.                                                       |    faux     |

## Exemple(s)

Cela va créer un autocollant appelé `Imagine`:

```javascript
bot.command({
    name: 'créerAutocollant',
    code: `
  $createSticker[$guildID;https://cdn.discordapp.com/attachments/1061712111052521493/1066397675278323734/692445926480150611.png;Imagine;true;monnaie;Autocollant aléatoire;Test.]
  `
});
```
