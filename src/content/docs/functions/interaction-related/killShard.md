---
title: $killShard
description: $killShard will kill a given shard.
id: killShard
---

`$killShard` will kill a given shard. (requires sharding)

## Usage

```php
$killShard[shardID]
```

## Parameters

| Field   | Type   | Description   | Required |
| ------- | ------ | ------------- | :------: |
| shardID | number | The shard ID. |   true   |

## Example(s)

This will kill the current shard ( requires **sharding** ):

```javascript
client.command({
  name: "killShard",
  code: `
  $killShard[$shardID]
  `
});
```
