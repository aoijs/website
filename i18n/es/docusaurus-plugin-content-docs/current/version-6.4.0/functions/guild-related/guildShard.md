---
title: '$guildShard'
description: '$guildShard will return the guilds of a specific shard.'
id: guildShard
---

`$guildShard` will return the guilds of a specific shard.

## Modo de uso

```php
$guildShard[option?;sep?;shardId]
```

## Parámetros

| Campo   | Tipo     | Parámetros                                                                               | Requerido |
| ------- | -------- | ---------------------------------------------------------------------------------------- |:---------:|
| opción? | entero   | Option to return the guilds in <br /> 1. **id** (default) <br /> 2. **name** |    no     |
| sep?    | consulta | Separator to separate multiple returned values.                                          |    no     |
| shardId | entero   | The shard ID.                                                                            |    sí     |

#### Note that this won't work without sharding. If you're unsure, review the [sharding guide](../../guides/client/6sharding.md).

## Ejemplo(s)

This will return the amount guilds of a shard:

```javascript
bot.command({
    name: 'guildShard',
    code: `
  $guildShard[name;, ;$shardID]
  `
});
```
