---
title: '$channelID'
description: '$channelID renvoie l''identifiant du salon dont le nom est donné.'
id: channelID
---

`$channelID` renvoie l'identifiant du salon dont le nom est donné.

## Utilisation

```php
$channelID[nom?]
```

## Paramètres

| Champ | Type   | Description                         | Obligatoire |
| ----- | ------ | ----------------------------------- |:-----------:|
| nom?  | entier | Nom du salon dont vous voulez l'ID. |    Faux     |

## Exemple(s)

Cela retournera l'ID du salon où vous exécutez la commande :

```javascript
bot.command({
    name: 'channelID',
    code: `
  $channelID
  `
});
```