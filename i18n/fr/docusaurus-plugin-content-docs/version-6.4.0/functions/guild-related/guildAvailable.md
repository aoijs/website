---
title: '$guildAvailable'
description: '$guildAvailable renverra si le serveur est disponible sur discord.'
id: guildAvailable
---

`$guildAvailable` renverra si le serveur est disponible sur discord.

## Utilisation

```php
$guildAvailable[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra `true` ou `false` selon la disponibilité du serveur sur discord:

```javascript
bot.command({
    name: 'serveurDisponible',
    code: `
  $guildAvailable[$guildID]
  `
});
```
