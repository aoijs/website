---
title: '$guildIcon'
description: '$guildIcon renverra l''icône du serveur.'
id: guildIcon
---

`$guildIcon` renverra l'icône du serveur.

## Utilisation

```php
$guildIcon[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra l'icône du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurIcône',
    code: `
  $guildIcon[$guildID]
  `
});
```
