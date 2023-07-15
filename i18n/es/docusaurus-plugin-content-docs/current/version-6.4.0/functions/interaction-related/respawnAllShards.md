---
title: '$respawnAllShards'
description: '$respawnAllShards will respawn all shards.'
id: respawnAllShards
---

`$respawnAllShards` will respawn all shards. (requiere sharding)

## Modo de uso

```php
$respawnAllShards
```

## Ejemplo(s)

This will respawn all shards (requires sharding):

```javascript
bot.command({
    name: 'respawnAllShards',
    code: `
   $respawnAllShards
  `
});
```