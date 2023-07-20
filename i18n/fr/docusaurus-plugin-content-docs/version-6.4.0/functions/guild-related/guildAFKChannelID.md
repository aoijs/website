---
title: '$guildAFKChannelID'
description: '$guildAFKChannelID renverra le salon vocal AFK d''un serveur donné.'
id: guildAFKChannelID
---

`$guildAFKChannelID` renverra le salon vocal AFK d'un serveur donné.

## Utilisation

```php
$guildAFKChannelID[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    vrai     |

## Exemple(s)

Ceci renverra le salon vocal AFK du serveur:

```javascript
bot.command({
    name: 'salonVocalAFK',
    code: `
  $guildAFKChannelID
  `
});
```
