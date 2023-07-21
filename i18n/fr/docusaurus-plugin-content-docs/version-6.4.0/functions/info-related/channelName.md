---
title: '$channelName'
description: '$channelName retournera le nom du salon donné.'
id: channelName
---

`$channelName` retournera le nom du salon donné.

## Utilisation

```php
$channelName[IDsalon?]
```

## Paramètres

| Champ    | Type   | Description                                     | Obligatoire |
| -------- | ------ | ----------------------------------------------- |:-----------:|
| IDsalon? | entier | ID du salon dont vous souhaitez obtenir le nom. |    Faux     |

## Exemple(s)

Cela retournera le nom du salon dans lequel vous avez exécuté la commande :

```javascript
bot.command({
    name: 'channelName',
    code: `
  $channelName[$channelID]
  `
});
```