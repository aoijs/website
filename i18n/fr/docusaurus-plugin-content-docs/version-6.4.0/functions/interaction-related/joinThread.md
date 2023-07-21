---
title: '$joinThread'
description: '$joinThread fera que le bot rejoindra un fil de discussion spécifique.'
id: joinThread
---

`$joinThread` fera que le bot rejoindra un fil de discussion spécifique.

## Utilisation

```php
$joinThread[IDsalon;IDfil]
```

## Paramètres

| Champ   | Type   | Description                                       | Obligatoire |
| ------- | ------ | ------------------------------------------------- |:-----------:|
| IDsalon | entier | L'ID du salon où se trouve le fil de discussion . |    vrai     |
| IDfil   | entier | L'ID du fil de discussion .                       |    vrai     |

## Exemple(s)

Cela va créer un fil de discussion dans le salon actuel et ajouter le bot à celui-ci :

```javascript
bot.command({
    name: 'joinThread',
    code: `
  
  $joinThread[$channelID;$get[IDthread]]
  $let[IDthread;$createThread[$channelID;Exemple !;1440;public;$messageID;true]]
  `
});
```