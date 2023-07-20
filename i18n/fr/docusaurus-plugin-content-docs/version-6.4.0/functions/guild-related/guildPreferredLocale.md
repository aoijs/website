---
title: '$guildPreferredLocale'
description: '$guildPreferredLocale renverra le lieu défini d''un serveur.'
id: guildPreferredLocale
---

`$guildPreferredLocale` renverra la lieu définis d'un serveur.

## Utilisation

```php
$guildPreferredLocale[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description                                                 | Obligatoire |
| ---------- | ------ | ----------------------------------------------------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur dont vous souhaitez obtenir le lieu défini. |    faux     |

## Exemple(s)

Cela renverra le lieu défini du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'lieuDéfinisDuServeur',
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
