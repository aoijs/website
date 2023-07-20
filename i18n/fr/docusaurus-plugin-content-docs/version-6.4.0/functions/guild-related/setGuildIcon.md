---
title: '$setGuildIcon'
description: '$setGuildIcon va changer l''icône d''un serveur.'
id: setGuildIcon
---

`$setGuildIcon` modifiera l'icône du serveur.

## Utilisation

```php
$setGuildIcon[URL;IDserveur?]
```

## Paramètres

| Champ      | Type                 | Description                                           | Obligatoire |
| ---------- | -------------------- | ----------------------------------------------------- |:-----------:|
| URL        | chaîne de caractères | URL d'une nouvelle icône du serveur.                  |    vrai     |
| IDserveur? | entier               | L'ID du serveur dont vous souhaitez modifier l'icône. |    faux     |

## Exemple(s)

Ceci changera l'icône du serveur dans lequel vous exécutez la commande à votre avatar:

```javascript
bot.command({
    name: 'définirServeurIcône',
    code: `
   $setGuildIcon[$userAvatar[$authorID];$guildID]`
});
```