---
title: '$spawnShard'
description: '$spawnShard will spawn a shard.'
id: spawnShard
---

`$spawnShard` will spawn a shard, requires sharding.

## Використання

```php
$spawnShard[shard]
```

## Параметри

| Поле  | Тип    | Опис              | Обов'язковий |
| ----- | ------ | ----------------- |:------------:|
| shard | number | Amount of shards. |     так      |

## Приклад(и)

This will spawn shard `1`:

```javascript
bot.command({
    name: 'spawnShard',
    code: `
   $spawnShard[1]`
});
```