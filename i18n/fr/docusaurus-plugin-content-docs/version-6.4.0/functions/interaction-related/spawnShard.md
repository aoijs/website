---
title: '$spawnShard'
description: '$spawnShard fera apparaître un shard.'
id: spawnShard
---

`$spawnShard` fera apparaître un shard, nécessite le sharding.

## Utilisation

```php
$spawnShard[shard]
```

## Paramètres

| Champ | Type   | Description         | Obligatoire |
| ----- | ------ | ------------------- |:-----------:|
| shard | nombre | Quantité de shards. |    vrai     |

## Exemple(s)

Ceci fera apparaître un fragment `1`:

```javascript
bot.command({
    name: 'spawnShard',
    code: `
   $spawnShard[1]`
});
```