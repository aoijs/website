---
title: '$guildEmojiExists'
description: '$guildEmojiExists vérifiera si l''emoji donné existe dans le serveur donné.'
id: guildEmojiExists
---

`$guildEmojiExists` vérifiera si l'emoji donné existe dans le serveur donné.

## Utilisation

```php
$guildEmojiExists[emojiDevantÊtreVérifier;IDserveur?]
```

## Paramètres

| Champ                   | Type                 | Description                                                            | Obligatoire |
| ----------------------- | -------------------- | ---------------------------------------------------------------------- |:-----------:|
| emojiDevantÊtreVérifier | chaîne de caractères | Emoji dont vous souhaitez vérifier l'existence sur le serveur donné.   |    vrai     |
| IDserveur?              | entier               | ID du serveur où vous souhaitez vérifier l'existence de l'emoji donné. |    faux     |

## Exemple(s)

Cela renverra `true` car l'émoji ![emoji](https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless) existe:

```javascript
bot.command({
    name: 'emojiServeurExiste',
    code: `
  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]
  `
});
```
