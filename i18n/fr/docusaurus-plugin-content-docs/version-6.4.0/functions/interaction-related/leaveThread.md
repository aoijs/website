---
title: '$leaveThread'
description: '$leaveThread fera quitter votre bot d''un fil de discussion spécifique.'
id: leaveThread
---

`$killShard` fera quitter votre bot d'un fil de discussion spécifique.

## Utilisation

```php
$leaveThread[IDsalon;IDfil]
```

## Paramètres

| Champ   | Type   | Description                                      | Obligatoire |
| ------- | ------ | ------------------------------------------------ |:-----------:|
| IDsalon | entier | L'ID du salon où se trouve le fil de discussion. |    vrai     |
| IDfil   | entier | L'ID du fil de discussion.                       |    vrai     |

## Exemple(s)

Cela va créer un fil de discussion et faire quitter le bot après la création :

```javascript
bot.command({
    name: 'leaveThread',
    code: `
  
  $leaveThread[$channelID;$get[threadID]]
  $let[threadID;$createThread[$channelID;Example!;1440;public;$messageID;true]]
  `
});
```