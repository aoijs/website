---
title: '$guildID'
description: '$guildID renverra l''ID du serveur donné.'
id: guildID
---

`$guildID` renverra l'ID du serveur donné.

## Utilisation

```php
$guildID[nom?]
```

## Paramètres

| Champ | Type                 | Description                                                  | Obligatoire |
| ----- | -------------------- | ------------------------------------------------------------ |:-----------:|
| nom?  | chaîne de caractères | Le nom de la guilde dont vous voulez que l'ID soit retourné. |    faux     |

## Exemple(s)

Cela renverra l'ID du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'IDserveur',
    code: `
  $guildID
  `
});
```
