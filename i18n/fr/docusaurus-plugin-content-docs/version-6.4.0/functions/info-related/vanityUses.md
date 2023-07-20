---
title: '$vanityUses'
description: '$vanityUses retournera les utilisations d''une URL vanité.'
id: vanityUses
---

`$vanityUses` retournera les utilisations d'une URL vanité.

## Utilisation

```php
$vanityUses[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    Faux     |

## Exemple(s)

Cela renverra l'utilisation de l'URL de vanité de votre serveur, si vous en avez une :

```javascript
bot.command({
    name: 'vanityUses',
    code: `
  $vanityUses[$guildID]
  `
});
```
