---
title: '$createRole'
description: '$createRole créera un nouveau rôle dans le serveur donné.'
id: createRole
---

`$createRole` créera un nouveau rôle dans le serveur donné.

## Utilisation

```php
$createRole[IDserveur;renvoyerID;nom;couleur;icône;afficherSéparément;unicodeEmoji;position;mentionable;...permissions]
```

## Paramètres

| Champ              | Type                 | Description                                        | Obligatoire |
| ------------------ | -------------------- | -------------------------------------------------- |:-----------:|
| IDserveur          | entier               | L'ID de la guilde dans laquelle le rôle sera créé. |    vrai     |
| renvoyerID         | booléen              | Renvoie l'ID du rôle nouvellement créé?            |    vrai     |
| nom                | chaine de caractères | Le nom du nouveau rôle.                            |    vrai     |
| couleur            | entier               | La couleur du nouveau rôle.                        |    vrai     |
| icône              | chaine de caractères | L'URL de l'image qui sera utilisée comme icône.    |    faux     |
| afficherSéparément | booléen              | Si le nouveau rôle doit être afficher séparément.  |    vrai     |
| unicodeEmoji       | chaîne de caractères | L'unicodeEmoji qui sera utilisé en icône.          |    faux     |
| position           | entier               | La position du rôle, 1 étant le plus bas.          |    vrai     |
| mentionnable       | booléen              | Si le rôle est mentionnable par `@everyone`.       |    vrai     |
| ...permissions     | chaine de caractères | Permissions que le rôle aura.                      |    faux     |

## Exemple(s)

Cela va créer un nouveau rôle appelé "Oiseau" avec comme couleur le rouge:

```javascript
bot.command({
    name: 'créerRole',
    code: `
    $createRole[$guildID;false;Oiseau;FF0000;;false;❤;1;false;sendmessages]`
});
```
