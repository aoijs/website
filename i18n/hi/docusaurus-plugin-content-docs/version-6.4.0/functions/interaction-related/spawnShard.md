---
title: '$spawnShard'
description: '$spawnShard will spawn a shard.'
id: spawnShard
---

`$spawnShard` will spawn a shard, requires sharding.

## प्रोयोग

```php
$spawnShard[shard]
```

## पैरामीटर्स

| फील्ड | टाइप   | डिस्क्रिप्शन      | चाहिए |
| ----- | ------ | ----------------- |:-----:|
| shard | number | Amount of shards. | true  |

## ट्रू (हा)

This will spawn shard `1`:

```javascript
bot.command({
    name: 'spawnShard',
    code: `
   $spawnShard[1]`
});
```