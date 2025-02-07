---
title: $respawnAllShards
description: $respawnAllShards will respawn all shards.
id: respawnAllShards
---

`$respawnAllShards` will respawn all shards. (requires [**sharding**](https://aoi.js.org/guides/client/sharding))
## Usage

```aoi
$respawnAllShards
```

## Example(s)

This will respawn all shards (requires [**sharding**](https://aoi.js.org/guides/client/sharding)):

```javascript
client.command({
    name: "respawnAllShards",
    code: `
   $respawnAllShards
  `
});
```
