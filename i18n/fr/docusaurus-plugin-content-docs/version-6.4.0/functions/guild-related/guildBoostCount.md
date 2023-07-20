---
title: '$guildBoostCount'
description: '$guildBoostCount renverra le nombre de boosts de guilde.'
id: guildBoostCount
---

`$guildBoostCount` renverra le nombre de boosts de guilde.

## Utilisation

```php
$guildBoostCount[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra le nombre de boosts du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'boostServeur',
    code: `
  $guildBoostCount[$guildID]
  `
});
```
