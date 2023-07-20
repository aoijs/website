---
title: '$guildDefaultMessageNotifications'
description: '$guildDefaultMessageNotifications renverra le message de notification par défaut du serveur.'
id: guildDefaultMessageNotifications
---

`$guildDefaultMessageNotifications` renverra le message de notification par défaut du serveur.

## Utilisation

```php
$guildDefaultMessageNotifications[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Cela renverra le message de notification par défaut du serveur dans lequel la commande est exécutée:

```javascript
bot.command({
    name: 'messageDeNotificationParDéfaut',
    code: `
  $guildDefaultMessageNotifications
  `
});
```
