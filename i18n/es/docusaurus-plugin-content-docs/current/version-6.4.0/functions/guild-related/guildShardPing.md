---
title: '$guildShardPing'
description: '$guildShardPing will return the latency of a specific shard.'
id: guildShardPing
---

`$guildShardPing` will return the latency of a specific shard.

## Modo de uso

```php
$guildShardPing[shardId?]
```

## Parámetros

| Campo    | Tipo    | Parámetros    | Requerido |
| -------- | ------- | ------------- |:---------:|
| shardId? | integer | The shard ID. |    no     |

**Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).**

## Ejemplo(s)

This will return the shard latency of the current shard:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```
