---
title: '$killShard'
description: '$killShard tuera un shard donné.'
id: killShard
---

`$killShard` tuera un shard donné. (nécessite le sharding)

## Utilisation

```php
$killShard[IDshard]
```

## Paramètres

| Champ   | Type   | Description       | Obligatoire |
| ------- | ------ | ----------------- |:-----------:|
| IDshard | nombre | L'ID du fragment. |    vrai     |

## Exemple(s)

Ceci tuera le shard actuel (nécessite le **sharding** ) :

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```
