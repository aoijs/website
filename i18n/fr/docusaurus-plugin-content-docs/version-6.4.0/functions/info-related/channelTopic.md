---
title: '$channelTopic'
description: '$channelTopic retournera le sujet du salon donné.'
id: channelTopic
---

`$channelTopic` renverra le sujet du salon donné.

## Utilisation

```php
$channelTopic[IDsalon?]
```

## Paramètres

| Champ    | Type   | Description                                    | Obligatoire |
| -------- | ------ | ---------------------------------------------- |:-----------:|
| IDsalon? | entier | ID du salon dont vous voulez obtenir le sujet. |    Faux     |

## Exemple(s)

Cela retournera le sujet du salon où vous exécutez la commande :

```javascript
bot.command({
    name: 'channelTopic',
    code: `
  $channelTopic[$channelID]
  `
});
```