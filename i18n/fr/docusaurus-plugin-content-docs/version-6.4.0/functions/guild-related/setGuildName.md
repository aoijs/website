---
title: '$setGuildName'
description: '$setGuildName changera le nom d''un serveur.'
id: setGuildName
---

`$setGuildName` va changer le nom d'un serveur.

## Utilisation

```php
$setGuildName[nom;IDserveur?]
```

## Paramètres

| Champ      | Type                 | Description                               | Obligatoire |
| ---------- | -------------------- | ----------------------------------------- |:-----------:|
| nom        | chaîne de caractères | Le nouveau nom du serveur.                |    vrai     |
| IDserveur? | entier               | L'ID du serveur dont le nom sera modifié. |    faux     |

## Exemple(s)

Ceci changera le nom du serveur dans lequel vous exécutez la commande en votre nom d'utilisateur :

```javascript
bot.command({
    name: 'définirNomServeur',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```