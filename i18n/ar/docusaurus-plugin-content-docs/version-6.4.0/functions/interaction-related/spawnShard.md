---
title: '$spawnShard'
description: '$spawnShard will spawn a shard.'
id: spawnShard
---

`$spawnShard` will spawn a shard, requires sharding.

## الاستخدام

```php
$spawnShard[shard]
```

## البارامترات

| Field | النوع  | الديسكبربشين      | مطلوب |
| ----- | ------ | ----------------- |:-----:|
| shard | number | Amount of shards. | true  |

## مثال

This will spawn shard `1`:

```javascript
bot.command({
    name: 'spawnShard',
    code: `
   $spawnShard[1]`
});
```