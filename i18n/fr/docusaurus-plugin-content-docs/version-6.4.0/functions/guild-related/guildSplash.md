---
title: '$guildSplash'
description: '$guildSplash renverra l''arrière-plan d''invitation (si débloqué).'
id: guildSplash
---

`$guildSplash` renverra l'arrière-plan d'invitation (si débloqué).

## Utilisation

```php
$guildSplash[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Ceci renverra l'arrière-plan d'invitation (si débloqué) du serveur dans lequel la commande a été exécutée:

```javascript
bot.command({
    name: 'arrièrePlanInvitation',
    code: `
  $guildSplash[$guildID]
  `
});
```
