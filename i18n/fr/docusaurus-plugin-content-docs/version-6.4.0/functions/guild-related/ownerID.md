---
title: '$ownerID'
description: '$ownerID renverra l''ID du propriétaire du serveur, dépend de l''argument donné.'
id: ownerID
---

`$ownerID` renverra l'ID du propriétaire du serveur, dépend de l'argument donné.

## Utilisation

```php
$ownerID[IDserveur?]
```

## Paramètres

| Champ      | Type   | Description      | Obligatoire |
| ---------- | ------ | ---------------- |:-----------:|
| IDserveur? | entier | L'ID du serveur. |    faux     |

## Exemple(s)

Ceci retournera l'ID du propriétaire du serveur dans lequel vous exécutez la commande:

```javascript
bot.command({
    name: 'IDpropriétaire',
    code: `
  $ownerID[$guildID]
  `
});
```
