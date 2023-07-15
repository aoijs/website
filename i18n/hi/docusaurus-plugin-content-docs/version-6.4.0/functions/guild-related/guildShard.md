---
title: '$guildShard'
description: '$guildShard will return the guilds of a specific shard.'
id: guildShard
---

`$guildShard` will return the guilds of a specific shard.

## प्रोयोग

```php
$guildShard[option?;sep?;shardId]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                                             |    चाहिए     |
| ------- | -------- | ---------------------------------------------------------------------------------------- |:------------:|
| option? | integer  | Option to return the guilds in <br /> 1. **id** (default) <br /> 2. **name** | असत्य (नहीं) |
| sep?    | स्ट्रिंग | Separator to separate multiple returned values.                                          | असत्य (नहीं) |
| shardId | integer  | The shard ID.                                                                            |     true     |

#### Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/Client/6sharding.md).

## ट्रू (हा)

This will return the amount guilds of a shard:

```javascript
bot.command({
    name: 'guildShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
