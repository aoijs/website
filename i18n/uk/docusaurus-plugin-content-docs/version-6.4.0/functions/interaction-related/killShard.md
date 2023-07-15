---
title: '$killShard'
description: '$killShard will kill a given shard.'
id: killShard
---

`$killShard` will kill a given shard. (requires sharding)

## Використання

```php
$killShard[shardID]
```

## Параметри

| Поле    | Тип    | Опис          | Обов'язковий |
| ------- | ------ | ------------- |:------------:|
| shardID | number | The shard ID. |     так      |

## Приклад(и)

This will kill the current shard ( requires **sharding** ):

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```
