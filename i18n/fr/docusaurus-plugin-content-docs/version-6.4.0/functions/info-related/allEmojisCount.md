---
title: '$allEmojisCount'
description: '$allEmojisCount renvoie le nombre d''émojis d''un type donné.'
id: allEmojisCount
---

`$allEmojisCount` renvoie le nombre d'émojis d'un type donné.

## Usage

```php
$allEmojisCount[type?]
```

## Paramètres

| Champ | Type                 | Description                                        | Obligatoire |
| ----- | -------------------- | -------------------------------------------------- | ----------- |
| type? | chaîne de caractères | Type que vous voulez que le montant soit retourné. | Faux        |

| Type d'émoji   |          |
| -------------- | -------- |
| Émojis animés  | animated |
| Émojis stables | normal   |

## Exemple(s)

Cela retournera le nombre d'émojis dans votre serveur :

```javascript
bot.command({
    name: 'allEmojisCount',
    code: `
  $allEmojisCount
  `
});
```