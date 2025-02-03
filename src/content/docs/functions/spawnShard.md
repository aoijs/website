---
title: $spawnShard
description: $spawnShard will spawn a shard.
id: spawnShard
---

`$spawnShard` will spawn a shard (requires [**sharding**](https://aoi.js.org/guides/client/sharding))
## Usage

```aoi
$spawnShard[shard]
```

## Parameters

| Field | Type                                                                                              | Description       | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| shard | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Amount of shards. |   true   |

## Example(s)

This will spawn shard `1`:

```javascript
client.command({
    name: "spawnShard",
    code: `
   $spawnShard[1]`
});
```
