---
title: $guildShard
description: $guildShard will return the guilds of a specific shard.
id: guildShard
---

`$guildShard` will return the guilds of a specific shard.

## Usage

```php
$guildShard[option?;sep?;shardId]
```

## Parameters

| Field   | Type                                                                                              | Description                                                                  | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | :------: |
| option? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Option to return the guilds in <br /> 1. **id** (default) <br /> 2. **name** |  false   |
| sep?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to separate multiple returned values.                              |  false   |
| shardId | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The shard ID.                                                                |   true   |

## Example(s)

This will return the amount guilds of a shard:

```javascript
client.command({
  name: "guildShard",
  code: `
  $guildShard[name;, ;$shardID]
  `
});
```
