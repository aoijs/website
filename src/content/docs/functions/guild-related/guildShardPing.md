---
title: $guildShardPing
description: $guildShardPing will return the latency of a specific shard.
id: guildShardPing
---

`$guildShardPing` will return the latency of a specific shard.

## Usage

```php
$guildShardPing[shardId?]
```

## Parameters

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- | :------: |
| shardId? | integer | The shard ID. |  false   |

## Example(s)

This will return the shard latency of the current shard:

```javascript
client.command({
  name: "guildShardPing",
  code: `
  $guildShardPing[$shardId]MS
  `,
});
```
