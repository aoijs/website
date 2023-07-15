---
title: '$guildShard'
description: '$guildShard will return the guilds of a specific shard.'
id: guildShard
---

`$guildShard` will return the guilds of a specific shard.

## الاستخدام

```php
$guildShard[option?;sep?;shardId]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                                             | مطلوب |
| ------- | ------- | ---------------------------------------------------------------------------------------- |:-----:|
| option? | Integer | Option to return the guilds in <br /> 1. **id** (default) <br /> 2. **name** | false |
| sep?    | string  | Separator to separate multiple returned values.                                          | false |
| shardId | Integer | The shard ID.                                                                            | true  |

#### Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).

## مثال

This will return the amount guilds of a shard:

```javascript
bot.command({
    name: 'guildShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
