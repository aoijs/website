---
title: '$broadcastEval'
description: '$broadcastEval exécutera un code dans tous les serveurs de tous les shards.'
id: broadcastEval
---

`$broadcastEval` exécutera un code dans tous les serveurs de tous les shards. (nécessite le sharding)

## Utilisation

```php
$broadcastEval[fonction]
```

## Paramètres

| Champ    | Type                 | Description                        | Obligatoire |
| -------- | -------------------- | ---------------------------------- |:-----------:|
| fonction | chaîne de caractères | Fonction ou code qui sera exécuté. |    vrai     |

## Exemple(s)

**Nécessite le sharding - Consultez le Guide des shards si vous avez besoin d'explications**

Cela retournera le nombre de serveurs dans lesquels votre bot est :

```javascript
bot.command({
    name: 'broadcastEval',
    code: `
  $broadcastEval[$guildCount]
  `
});
```
