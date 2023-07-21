---
title: '$guildBoostLevel'
description: '$guildBoostLevel renverra le niveau de boost du serveur.'
id: guildBoostLevel
---

`$guildBoostLevel` renverra le niveau de boost du serveur.

## Utilisation

```php
$guildBoostLevel[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra le niveau de boost du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurNiveauBoost',
    code: `
  $guildBoostLevel[$guildID]
  `
});
```
