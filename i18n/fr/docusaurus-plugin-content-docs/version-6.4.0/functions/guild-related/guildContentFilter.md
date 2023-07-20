---
title: '$guildContentFilter'
description: '$guildContentFilter renverra le niveau de filtre de contenu du serveur.'
id: guildContentFilter
---

`$guildContentFilter` renverra le niveau de filtre de contenu du serveur.

## Utilisation

```php
$guildContentFilter[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    vrai     |

| Types de niveau de filtre |          |
| ------------------------- | -------- |
| 0                         | Disabled |
| 1                         | Medium   |
| 2                         | High     |

## Exemple(s)

Cela retournera le niveau de filtre de contenu du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurFiltre',
    code: `
  $guildContentFilter[$guildID]
  `
});
```
