---
title: '$guildShardPing'
description: '$guildShardPing will return the latency of a specific shard.'
id: guildShardPing
---

`$guildShardPing` will return the latency of a specific shard.

## الاستخدام

```php
$guildShardPing[shardId?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| shardId? | Integer | The shard ID. | false |

**Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/Client/6sharding.md).**

## مثال

This will return the shard latency of the current shard:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```
