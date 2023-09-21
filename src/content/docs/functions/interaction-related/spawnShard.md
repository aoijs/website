---
title: $spawnShard
description: $spawnShard will spawn a shard.
id: spawnShard
---

`$spawnShard` will spawn a shard, requires sharding.

## Usage

```php
$spawnShard[shard]
```

## Parameters

| Field | Type   | Description       | Required |
| ----- | ------ | ----------------- | :------: |
| shard | number | Amount of shards. |   true   |

## Example(s)

This will spawn shard `1`:

```javascript
client.command({
  name: "spawnShard",
  code: `
   $spawnShard[1]`,
});
```
