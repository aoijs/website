---
title: $respawnAllShards
description: $respawnAllShards will respawn all shards.
id: respawnAllShards
---

`$respawnAllShards` will respawn all shards. (requires sharding)

## Usage

```aoi
$respawnAllShards
```

## Example(s)

This will respawn all shards (requires sharding):

```javascript
client.command({
    name: "respawnAllShards",
    code: `
   $respawnAllShards
  `
});
```
