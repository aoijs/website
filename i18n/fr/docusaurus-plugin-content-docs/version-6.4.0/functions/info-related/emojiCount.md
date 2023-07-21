---
title: '$emojiCount'
description: '$emojiCount renvoie le nombre d''émojis d''un serveur.'
id: emojiCount
---

`$emojiCount` renvoie le nombre d'émojis d'un serveur.

## Utilisation

```php
$emojiCount[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                        | Obligatoire |
| ---------- | ------ | -------------------------------------------------- |:-----------:|
| IDserveur? | entier | D'où les émoticônes seront comptées et retournées. |    Faux     |

## Exemple(s)

Cela vous renverra le nombre d'émojis de votre serveur :

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  Vous avez $emojiCount émojis dans votre serveur !
  `
});
```