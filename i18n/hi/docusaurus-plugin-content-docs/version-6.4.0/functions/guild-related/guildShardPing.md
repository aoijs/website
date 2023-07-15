---
title: '$guildShardPing'
description: '$guildShardPing will return the latency of a specific shard.'
id: guildShardPing
---

`$guildShardPing` will return the latency of a specific shard.

## प्रोयोग

```php
$guildShardPing[shardId?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| shardId? | integer | The shard ID. | असत्य (नहीं) |

**Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).**

## ट्रू (हा)

This will return the shard latency of the current shard:

```javascript
bot.command({
    name: 'guildShardPing',
    code: `
  $guildShardPing[$shardId]MS
  `
});
```
