---
title: '$guildEmojis'
description: '$guildEmojis renverra les emojis d''un serveur spécifique.'
id: guildEmojis
---

`$guildEmojis` renverra les emojis d'un serveur spécifique.

## Utilisation

```php
$guildEmojis[séparateur?;IDserveur?]
```

## Paramètres

| Champ       | Type                 | Description                                    | Obligatoire |
| ----------- | -------------------- | ---------------------------------------------- |:-----------:|
| séparateur? | chaîne de caractères | Le séparateur pour séparer les emojis renvoyé. |    faux     |
| IDserveur?  | entier               | L'ID du serveur.                               |    faux     |

## Exemple(s)

Ceci renverra les emojis du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurEmojis',
    code: `
  $guildEmojis[, ;$guildID]
  `
});
```
