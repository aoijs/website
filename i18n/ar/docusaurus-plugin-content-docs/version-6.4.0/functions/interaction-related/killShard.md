---
title: '$killShard'
description: '$killShard will kill a given shard.'
id: killShard
---

`$killShard` will kill a given shard. (يتطلب استعمال نظام الشاردينج)

## الاستخدام

```php
$killShard[shardID]
```

## البارامترات

| Field   | النوع  | الديسكبربشين  | مطلوب |
| ------- | ------ | ------------- |:-----:|
| shardID | number | The shard ID. | true  |

## مثال

This will kill the current shard ( requires **sharding** ):

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```
