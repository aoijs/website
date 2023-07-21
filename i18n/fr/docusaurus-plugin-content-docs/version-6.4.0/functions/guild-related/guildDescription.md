---
title: '$guildDescription'
description: '$guildDescription renverra la description du serveur.'
id: guildDescription
---

`$guildDescription` renverra la description du serveur.

## Utilisation

```php
$guildDescription[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Ceci renverra la description du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurDescription',
    code: `
  $guildDescription[$guildID]
  `
});
```
