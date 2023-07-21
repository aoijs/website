---
title: '$deleteChannel'
description: '$deleteChannel supprimera un salon spécifique.'
id: deleteChannel
---

`$deleteChannel` supprimera un salon spécifique.

## Utilisation

```php
$deleteChannel[IDsalon]
```

## Paramètres

| Champ   | Type   | Description                               | Obligatoire |
| ------- | ------ | ----------------------------------------- |:-----------:|
| IDsalon | entier | L'ID du canal du salon qui sera supprimé. |    vrai     |

## Exemple(s)

Ceci supprimera le salon où la commande a été exécutée:

```javascript
bot.command({
    name: 'supprimerSalon',
    code: `
  $deleteChannel[$channelID]
  `
});
```
