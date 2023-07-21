---
title: $channelType
description: '$channelType retournera le type du salon donné.'
id: channelType
---

`$channelType` retournera le type du salon donné.

## Utilisation

```php
$channelType[IDsalon?]
```

## Paramètres

| Champ    | Type   | Description                                   | Obligatoire |
| -------- | ------ | --------------------------------------------- |:-----------:|
| IDsalon? | entier | ID du salon dont vous voulez obtenir le type. |    Faux     |

## Exemple(s)

Cela retournera le type du salon où vous exécutez la commande :

```javascript
bot.command({
    name: 'channelType',
    code: `
  $channelType[$channelID]
  `
});
```