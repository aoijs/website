---
title: '$guildShardPing'
description: '$guildShardPing will return the latency of a specific shard.'
id: guildShardPing
---

`$guildShardPing` will return the latency of a specific shard.

## Використання

```php
$guildShardPing[shardId?]
```

## Параметри

| Поле     | Тип     | Опис          | Обов'язковий |
| -------- | ------- | ------------- |:------------:|
| shardId? | integer | The shard ID. |      ні      |

**Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).**

## Приклад(и)

This will return the shard latency of the current shard:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```
