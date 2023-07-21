---
title: '$setGuildDiscoverySplash'
description: '$setGuildDiscoverySplash changera la bannière de découverte du serveur.'
id: setGuildDiscoverySplash
---

`$setGuildDiscoverySplash` changera la bannière de découverte du serveur.

## Utilisation

```php
$setGuildDiscoverySplash[IDserveur?;URL;raison?]
```

## Paramètres

| Champ      | Type                 | Description                                        | Obligatoire |
| ---------- | -------------------- | -------------------------------------------------- | ----------- |
| IDserveur? | entier               | ID du serveur                                      | faux        |
| URL        | chaîne de caractères | Nouvelle bannière de découverte du serveur.        | vrai        |
| raison?    | chaîne de caractères | Raison qui sera affichée dans les logs du serveur. | faux        |

## Exemple(s)

Cela changera la bannière de découverte du serveur actuel:

```javascript
bot.command({
    name: 'définirBannièreDeDécouverte',
    code: `
  $setGuildDiscoverySplash[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```