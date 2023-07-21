---
title: '$channelNSFW'
description: '$channelNSFW renverra true ou false selon que le salon donné est marqué comme NSFW ou non.'
id: channelNSFW
---

`$channelNSFW` renverra true ou false selon que le salon donné est marqué comme NSFW ou non.

## Utilisation

```php
$channelNSFW[IDsalon?]
```

## Paramètres

| Champ    | Type   | Description                                                             | Obligatoire |
| -------- | ------ | ----------------------------------------------------------------------- |:-----------:|
| IDsalon? | entier | ID du salon que vous voulez vérifier s'il est marqué comme NSFW ou non. |    Faux     |

## Exemple(s)

Cela retournera soit `true` ou `false` selon que le salon où vous exécutez la commande est marqué comme NSFW ou pas :

```javascript
bot.command({
    name: 'channelNSFW',
    code: `
  $channelNSFW[$channelID]
  `
});
```