---
title: '$guildName'
description: '$guildName renverra le nom d''un serveur.'
id: guildName
---

`$guildName` renverra le nom d'un serveur.

## Usage

```php
$guildName[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description   | Obligatoire |
| ---------- | ------ | ------------- |:-----------:|
| IDserveur? | entier | ID du serveur |    faux     |

## Exemple(s)

Cela renverra le nom du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'nomDuServeur',
    code: `
  $guildName[$guildID]
  `
});
```
