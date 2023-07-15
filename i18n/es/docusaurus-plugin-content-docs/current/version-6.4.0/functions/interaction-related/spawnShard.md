---
title: '$spawnShard'
description: '$spawnShard will spawn a shard.'
id: spawnShard
---

`$spawnShard` will spawn a shard, requires sharding.

## Modo de uso

```php
$spawnShard[shard]
```

## Parámetros

| Campo | Tipo   | Parámetros        | Requerido |
| ----- | ------ | ----------------- |:---------:|
| shard | número | Amount of shards. | verdadera |

## Ejemplo(s)

This will spawn shard `1`:

```javascript
bot.command({
    name: 'spawnShard',
    code: `
   $spawnShard[1]`
});
```