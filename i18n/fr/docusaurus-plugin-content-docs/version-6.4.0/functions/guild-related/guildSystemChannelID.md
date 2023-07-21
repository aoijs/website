---
title: '$guildSystemChannelID'
description: '$guildSystemChannelID renverra l''ID du salon système du serveur.'
id: guildSystemChannelID
---

`$guildSystemChannelID` renverra l'ID du salon système du serveur.

## Utilisation

```php
$guildSystemChannelID[IDsalon?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra l'ID du salon système du serveur:

```javascript
bot.command({
    name: 'salonSystèmeDuServeur',
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
