---
title: '$guildRulesChannelID'
description: '$guildRulesChannelID renverra l''ID du salon de règlement définis d''un serveur donné.'
id: guildRulesChannelID
---

`$guildRulesChannelID` renverra l'ID du salon de règlement définis d'un serveur donné.

## Utilisation

```php
$guildRulesChannelID[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra l'ID du salon des règles du serveur (serveur communautaire seulement):

```javascript
bot.command({
    name: 'ServeurSalonRèglement',
    code: `
  $guildRulesChannelID[$guildID]
  `
});
```
