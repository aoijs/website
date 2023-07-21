---
title: '$setGuildBanner'
description: '$setGuildBanner changera la bannière d''un serveur.'
id: setGuildBanner
---

`$setGuildBanner` changera la bannière d'un serveur.

## Utilisation

```php
$setGuildBanner[IDserveur?;URL;raison?]
```

## Paramètres

| Champ      | Type                 | Description                                        | Obligatoire |
| ---------- | -------------------- | -------------------------------------------------- | ----------- |
| IDserveur? | entier               | ID du serveur.                                     | faux        |
| URL        | chaîne de caractères | Lien de la nouvelle bannière du serveur.           | vrai        |
| raison?    | chaîne de caractères | Raison qui sera affichée dans les logs du serveur. | faux        |

## Exemple(s)

Ceci va changer la bannière du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'définirBannièreDuServeur',
    code: `
  $setGuildBanner[$guildID;https://cdn.discordapp.com/banners/773352845738115102/b2b27d0915a838e8b4f68b180d1901ad.webp;Example!]
  `
});
```
