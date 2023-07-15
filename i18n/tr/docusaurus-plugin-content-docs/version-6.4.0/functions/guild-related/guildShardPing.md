---
title: '$guildShardPing'
description: '$guildShardPing will return the latency of a specific shard.'
id: guildShardPing
---

`$guildShardPing` will return the latency of a specific shard.

## Usage

```php
$guildShardPing[shardId?]
```

## Parameters

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- |:--------:|
| shardId? | integer | The shard ID. |  false   |

**Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/Client/6sharding.md).**

## Example(s)

This will return the shard latency of the current shard:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```
