---
title: '$getChannelSlowmode'
description: '$getChannelSlowmode retournera le mode lent d''un salon en secondes.'
id: getChannelSlowmode
---

`$getChannelSlowmode` renverra le mode lent d'un salon en secondes.

## Utilisation

```php
$getChannelSlowmode[IDsalon?]
```

## Paramètres

| Champ    | Type   | Description                                                | Obligatoire |
| -------- | ------ | ---------------------------------------------------------- |:-----------:|
| IDsalon? | entier | ID du salon où vous voulez que le mode lent soit retourné. |    Faux     |

## Exemple(s)

Cela retournera le mode lent du salon où vous exécutez la commande :

```javascript
bot.command({
    name: 'getChannelSlowmode',
    code: `
  Le mode lent de ce salon est de : $getChannelSlowmode[$channelID] secondes !
  `
});
```