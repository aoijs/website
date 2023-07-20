---
title: '$guildExists'
description: '$guildExists vérifiera si le serveur donné existe.'
id: guildExists
---

`$guildExists` vérifiera si le serveur donné existe.

## Utilisation

```php
$guildExists[IDserveur]
```

## Paramètres

| Champ     | Type   | Description                           | Obligatoire |
| --------- | ------ | ------------------------------------- |:-----------:|
| IDserveur | entier | ID du serveur à vérifier l'existence. |    vrai     |

## Exemple(s)

Cela renverra `true` car votre serveur existe:

```javascript
bot.command({
    name: 'serveurExistent',
    code: `
  $guildExists[$guildID]
  `
});
```