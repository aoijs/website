---
title: '$guildIDS'
description: '$guildIDS renverra les IDs de tous les serveurs dans lesquels votre bot est.'
id: guildIDS
---

`$guildIDS` renverra les IDs de tous les serveurs dans lesquels votre bot est.

## Utilisation

```php
$guildIDS[séparetur?]
```

## Paramètres

| Champ       | Type                 | Description                                                                  | Obligatoire |
| ----------- | -------------------- | ---------------------------------------------------------------------------- |:-----------:|
| séparateur? | chaîne de caractères | Le séparateur pour séparer les IDs des serveurs dans lesquels votre bot est. |    faux     |

## Exemple(s)

Cela va renvoyer tous les identifiants des serveurs dans lesquels votre bot est:

```javascript
bot.command({
    name: 'serveurIDs',
    code: `
  $guildIDS[, ]
  `
});
```
