---
title: '$guildNSFWLevel'
description: '$guildNSFWLevel renverra le niveau NSFW du serveur.'
id: guildNSFWLevel
---

`$guildNSFWLevel` renverra le niveau NSFW du serveur.

## Utilisation

```php
$guildNSFWLevel[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    vrai     |

## Exemple(s)

Cela renverra le niveau NSFW du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'serveurNiveauNSFW',
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
