---
title: $guildShardID
description: $guildShardID will return the current shard ID.
id: guildShardID
---

`$guildShardID` will return the current shard ID.

## Usage

```aoi
$guildShardID
```

## Example(s)

This will return the current shard ID:

```javascript
client.command({
    name: "guildShardID",
    code: `
  I'm currently on shard $guildShardID!
  `
});
```
