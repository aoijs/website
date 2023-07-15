---
title: '$guildShard'
description: '$guildShard will return the guilds of a specific shard.'
id: guildShard
---

`$guildShard` will return the guilds of a specific shard.

## Використання

```php
$guildShard[option?;sep?;shardId]
```

## Параметри

| Поле    | Тип     | Опис                                                                                     | Обов'язковий |
| ------- | ------- | ---------------------------------------------------------------------------------------- |:------------:|
| option? | integer | Option to return the guilds in <br /> 1. **id** (default) <br /> 2. **name** |      ні      |
| sep?    | рядок   | Separator to separate multiple returned values.                                          |      ні      |
| shardId | integer | The shard ID.                                                                            |     так      |

#### Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).

## Приклад(и)

This will return the amount guilds of a shard:

```javascript
bot.command({
    name: 'guildShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
