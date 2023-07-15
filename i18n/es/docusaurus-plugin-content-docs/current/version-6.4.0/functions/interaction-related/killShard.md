---
title: '$killShard'
description: '$killShard will kill a given shard.'
id: killShard
---

`$killShard` will kill a given shard. (requiere sharding)

## Modo de uso

```php
$killShard[shardID]
```

## Parámetros

| Campo   | Tipo   | Parámetros    | Requerido |
| ------- | ------ | ------------- |:---------:|
| shardID | número | The shard ID. | verdadera |

## Ejemplo(s)

This will kill the current shard ( requires **sharding** ):

```javascript
bot.command({
    name: 'killShard',
    code: `
  $killShard[$shardID]
  `
});
```
